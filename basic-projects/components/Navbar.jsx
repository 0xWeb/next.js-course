import Link from "next/link"

function Navbar() {
    return (
        <nav className="absolute flex m-8 gap-6 font-bold text-xl">
            <Link href={'/'}>
                Home
            </Link>
            <ul>
                <li>
                    <Link href={'/about'}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar