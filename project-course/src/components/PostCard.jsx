"use client"
import { useParams } from 'next/navigation'

import Link from 'next/link'

// REACT CLIETTN COMPONENTT
function PostCard({ post }) {

    const params = useParams()
    console.log(params);
    return (
        <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
                <h3>
                    {post.id}.{post.title}
                </h3>
            </Link>
            <p>{post.body}</p>

            <button>
                Click
            </button>
        </div>
    )
}

export default PostCard