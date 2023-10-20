import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='text-white flex items-center justify-between px-6 py-6 mb-12'>
            <h2 className='font-bold text-3xl'>ToDo Tasks</h2>
            <ul className='flex gap-5 font-medium'>
                <li>
                    <Link href={'/'}>Tasks</Link>
                </li>
                <li>
                    <Link href={'/new'}>Create Task</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar