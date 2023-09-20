"use client"

// REACT CLIETTN COMPONENTT
function PostCard({ post }) {
    return (
        <div key={post.id}>
            <h3>
                {post.id}.{post.title}
            </h3>
            <p>{post.body}</p>

            <button onClick={() => { alert('Alert with client') }}>
                Click
            </button>
        </div>
    )
}

export default PostCard