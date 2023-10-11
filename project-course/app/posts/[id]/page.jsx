import Posts from '@/'
import { Suspense } from 'react'


async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

async function Page({ params }) {

    const post = await loadPost(params.id)

    return (
        <div>
            <h1>
                {post.id} {post.title}
            </h1>
            <p>
                {post.body}
            </p>
            <hr />
            <hr />

            <h2>Other Posts</h2>

            <Suspense fallback={
                <div>
                    Loading other posts...
                </div>
            }>
                <Posts />
            </Suspense>
        </div>
    )
}

export default Page