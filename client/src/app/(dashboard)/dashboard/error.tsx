'use client';


function Error({error, reset}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return <div>Error</div>;
}

export default Error;