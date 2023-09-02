import {Metadata} from "next";
import Link from "next/link";


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok) throw new Error('Unable to fetch posts')

    return res.json()
}

export const metadata: Metadata = {
    title: 'Blog metatitle',
}

export default async function Blog() {
    const posts = await getData()

    return (
        <>
            <div>Blog</div>
            <div>
                <p>POSTS</p>
                <ul>
                    {posts.map((post: any) =>
                        <li>
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
