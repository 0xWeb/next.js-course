import Link from 'next/link'
import React from 'react'

function notFound() {
    return (
        <section className='flex h-[calc(100vh-40vh)] justify-center items-center'>
            <div>
                <h1 className='text-3xl font-bold'>
                    Page Not Found
                </h1>
            </div>
        </section>
    )
}

export default notFound