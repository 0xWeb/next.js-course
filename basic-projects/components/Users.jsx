"use client";

import Link from "next/link";

function Users({ users }) {
    return (
        <ul className="grid grid-flow-row grid-cols-2  gap-4">
            {
                users.map((user) => (
                    <Link href={`/users/${user.id}`} key={user.id}>
                        <li
                            className="bg-slate-600 mb-4 px-4 py-4 rounded-lg"
                        >
                            <div className="flex flex-col justify-center items-center">
                                <img src={user.avatar} alt="User Avatar" className="rounded-full mb-3" />
                                <h5 className="font-bold text-lg">
                                    {user.first_name} {user.last_name}
                                </h5>
                                <p>{user.email}</p>
                            </div>
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default Users