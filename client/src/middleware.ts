import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const protectedRoutes = /\/dashboard.*/;
const publicRoutes = /\/(dashboard).*/;

async function isAccessPage(req: NextRequest, path: string): Promise<boolean | NextResponse> {
    const isProtectedRoute = path.match(protectedRoutes);
    const isPublicRoute = !path.match(publicRoutes);

    if (isPublicRoute) return true;

    if (isProtectedRoute) {
        const auth = (await cookies()).get('session')?.value ?? '';
        if (!auth) return false;

        const roles = JSON.parse(auth)?.roles;
        if (!roles) return false;

        const isAccess = roles.find((role: any) => role.name === 'admin');
        if (!isAccess && roles) return false;
    }

    return true;
}

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    if (!(await isAccessPage(req, path))) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        {
            source:
                '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
            missing: [
                {type: 'header', key: 'next-router-prefetch'},
                {type: 'header', key: 'purpose', value: 'prefetch'}
            ]
        },

        {
            source:
                '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
            has: [
                {type: 'header', key: 'next-router-prefetch'},
                {type: 'header', key: 'purpose', value: 'prefetch'}
            ]
        },

        {
            source:
                '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
            has: [{type: 'header', key: 'x-present'}],
            missing: [{type: 'header', key: 'x-missing', value: 'prefetch'}]
        }
    ]
};