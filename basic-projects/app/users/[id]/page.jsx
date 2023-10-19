async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

async function UserPage({ params }) {

    const user = await getUser(params.id)

    console.log(user);


    return (
        <main className="flex min-h-screen items-center justify-center p-24">
            <div className="flex flex-col justify-center items-center bg-slate-600 px-16 py-8 rounded-lg">
                <img src={user.avatar} alt="User Avatar" className="rounded-full mb-3" />
                <h5 className="font-bold text-lg">
                    {user.first_name} {user.last_name}
                </h5>
                <p>{user.email}</p>
            </div>
        </main>
    )
}

export default UserPage