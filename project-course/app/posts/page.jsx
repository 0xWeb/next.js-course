import PostCard from "../../components/PostCard";

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
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