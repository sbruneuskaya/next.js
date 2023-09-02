'use client'


import Link from "next/link";

export default function Error({error}: { error: Error }) {
    return (
        <>
            <p>Ooops! {error.message}</p>
            <Link href={'/'}>
                Back to Home
            </Link>
        </>
    )
}