import TaskCard from "@/components/TaskCard";
import { Prisma, prisma } from "@/libs/prisma";


async function loadTasks() {

  // Request the data base directly
  return await prisma.task.findMany()


  // HTTP Request with fetch
  // const res = await fetch('http://localhost:3000/api/tasks')
  // const data = await res.json()

}

async function HomePage() {

  const tasks = await loadTasks()
  console.log(tasks);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-2 gap-6">

        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}

export default HomePage