import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import dbConnect from '@/libs/db'
import { TodoModel } from '@/libs/mongoose.model'

export async function GET() {
  await dbConnect()
  const todos = await TodoModel.find({})
  revalidatePath('/')
  return NextResponse.json({ todos }, { status: 200 })
}

export async function POST(req: Request) {
  await dbConnect()
  const { title } = await req.json()

  const newTodo = new TodoModel({
    title,
  })

  await newTodo.save()
  revalidatePath('/')
  return NextResponse.json({ message: 'Success' }, { status: 200 })
}
