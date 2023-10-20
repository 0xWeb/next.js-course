"use client"
import { useRouter } from "next/navigation"

function TaskCard({ task }) {

    const router = useRouter()

    return (
        <div
            className="bg-slate-900 p-3 hover:bg-slate-800 cursor-pointer flex flex-col gap-2"
            onClick={() => {
                router.push('/task/edit/' + task.id)
            }}
        >
            <h3 className="font-bold text-2xl">{task.title}</h3>
            <p className="text-slate-200">{task.description}</p>
            <div className="flex flex-col opacity-50"><p>{new Date(task.createAt).toLocaleDateString()}</p>
                <p>{new Date(task.createAt).toLocaleTimeString()}</p></div>
        </div>
    )
}

export default TaskCard