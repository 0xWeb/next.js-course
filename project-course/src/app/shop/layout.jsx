import Link from 'next/link'

export const metadata = {
    title: 'Shop'

}

export default function ShopLayout({ children }) {
    return (
        <>
            <nav>
                <h1>
                    Shop Section
                </h1>
                <ul>
                    <li>
                        <Link href={"/shop/categories"}>Categories</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link href={"/shop"}>Shop</Link>
                    </li>
                </ul>
            </nav>

            {children}
        </>
    )
};
