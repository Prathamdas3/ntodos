import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import dbConnect from '@/libs/db'
import { TodoModel } from '@/libs/mongoose.model'

export async function GET() {
  await dbConnect()
  const todos = await TodoModel.find({})
  return NextResponse.json({ todos }, { status: 200 })
}

export async function POST(req: Request) {
  await dbConnect()
  const body = await req.json()
  console.log(body)
  const newTodo = new TodoModel({
    ...body,
  })

  await newTodo.save()
  revalidatePath('/todos')
  return NextResponse.json({ message: 'Success' }, { status: 200 })
}
