"use client"

import Link from 'next/link'

// REACT CLIETTN COMPONENTT
function PostCard({ post }) {
    return (
        <div key={post.id}>
            <Link href={`posts/${post.id}`}>
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