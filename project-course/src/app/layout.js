
import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
import { Actor } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata = {
    title: 'Project Course',
    description: 'Project To Lear NEXT.JS from 0',
    keywords: 'NEXTJS, Course, Learning'
}

const actor = Actor({
    weight: ['400'],
    styles: ['italic', 'normal'],
    subsets: ['latin']
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={actor.className}>
                <Navbar />
                {children}
            </body>
        </html >
    )
}