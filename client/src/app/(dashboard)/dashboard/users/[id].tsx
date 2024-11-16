async function Page({params}: {params: Promise<{ slug: string }>}): Promise<React.ReactNode> {
    return <div>User/{(await params).slug}</div>
}

export default Page;