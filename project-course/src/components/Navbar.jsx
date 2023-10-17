"use client"
import Link from 'next/link'


function Navbar() {

    return (
        <>
            <nav className='flex p-10 bg-slate-600 items-center justify-between'>
                <h1 className='text-5xl font-bold'>
                    Navbar
                </h1>
                <ul style={{ display: 'flex', gap: 30 }}>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link href={"/shop"}>Shop</Link>
                    </li>
                    <li>
                        <Link href={"/posts"}>Posts</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar