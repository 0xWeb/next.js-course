import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return (data.data);
}

async function Home() {

  const users = await fetchUsers()

  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-16">
        Users With Next JS
      </h1>
      <Users users={users} />

    </main>
  )
}

export default Home
