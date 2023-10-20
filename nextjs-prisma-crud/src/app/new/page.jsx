"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

function NewPage({ params }) {

    const router = useRouter()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (params.id) {
            fetch(`/api/tasks/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title)
                    setDescription(data.description)
                })
        }
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (params.id) {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data);
        } else {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data);
        }
        router.refresh()
        router.push('/')
    }

    const handleDelete = async () => {
        fetch(`/api/tasks/${params.id}`, {
            method: 'DELETE',
        })
        console.log('deleting');
        router.refresh()
        router.push('/')
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <form
                className="bg-slate-800 p-10 max-w-[500px] mx-5"
                onSubmit={handleSubmit}
            >

                <label htmlFor="title" className="font-bold text-sm">Task title</label>
                <input type="text"
                    id="title"
                    name="title"
                    className="border-gray-400 p-2 mb-4 w-full text-black"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="description" className="font-bold text-sm">Task description</label>
                <textarea rows="3"
                    id="description"
                    className="border-gray-400 p-2 mb-4 w-full text-black"
                    placeholder="Task description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                ></textarea>

                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>

                    {params.id &&
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button"
                            onClick={() => handleDelete()}
                        >Delete</button>
                    }
                </div>

            </form>
        </div>
    )
}

export default NewPage