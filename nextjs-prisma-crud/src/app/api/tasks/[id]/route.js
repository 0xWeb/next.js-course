import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    console.log(task);

    return NextResponse.json(task)
}

export async function PUT(request, { params }) {

    const { title, description } = await request.json()
    const taskUpdated = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: {
            title,
            description
        }
    })

    return NextResponse.json(taskUpdated)
}

export async function DELETE(request, { params }) {

    try {
        const deletedTask = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
    } catch (error) {
        return NextResponse.json(error.message)
    }
    return NextResponse.json(deletedTask)
}