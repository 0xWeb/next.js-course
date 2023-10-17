"use client"
import { useRouter } from "next/navigation";

export default function AboutPage(params) {

    const router = useRouter()

    return (
        <section>
            <h1>About</h1>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam unde autem recusandae, fuga voluptate natus animi earum ex placeat suscipit est iusto non doloremque temporibus possimus tempora. Facilis, magni laboriosam.</p>


            <button
                className="px-12 py-4 bg-sky-400 rounded"
                onClick={() => {
                    alert('Execcuting code')
                    router.push('/')
                }}
            >
                Click
            </button>

        </section>
    )
};
