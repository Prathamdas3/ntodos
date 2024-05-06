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

  revalidatePath('/todos')
  return NextResponse.json({ message: 'Success' }, { status: 200 })
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect()
  const id = params.id

  const { title, description, tags } = await req.json()

  await TodoModel.findByIdAndUpdate(id, {
    title,
    description,
    tags,
  })

  revalidatePath('/todos')
  return NextResponse.json({ message: 'Success' }, { status: 200 })
}
