import { NextResponse } from "next/server"

export function GET() {
    return NextResponse.json({
        message: 'Getting data'
    })
}

export async function POST(request) {

    // Data from body post request // Insomnia or Postman
    // {
    //   "name": "Ryan"
    //   "userId": 2
    // }
    const { name, userId } = await request.json() // request body
    console.log(name, userId);

    return NextResponse.json({
        message: 'Creating data'
    })
}

export function PUT() {
    return NextResponse.json({
        message: 'Updating data'
    })
}

export function DELETE() {
    return NextResponse.json({
        message: 'Deleting data'
    })
}
