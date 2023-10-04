import PostCard from "../../components/PostCard";
import { Suspense } from "react";

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return data
}

// REACT SERVER COMPONENT
async function PostPages() {

    const posts = await loadPosts()

    return (
        <div>
            {
                posts.map((post) => (
                    <PostCard post={post} />
                ))
            }
        </div>
    )
}

export default PostPages