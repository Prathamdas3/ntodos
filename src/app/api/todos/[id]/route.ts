import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
import dbConnect from '@/libs/db'
import { TodoModel } from '@/libs/mongoose.model'

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect()
  const id = params.id
  await TodoModel.findByIdAndDelete(id)

  revalidatePath('/')
  return NextResponse.json({ message: 'Success' }, { status: 200 })
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect()
  const id = params.id

  const { title } = await req.json()

  await TodoModel.findByIdAndUpdate(id, {
    title,
  })

  revalidatePath('/')
  return NextResponse.json({ message: 'Success' }, { status: 200 })
}
