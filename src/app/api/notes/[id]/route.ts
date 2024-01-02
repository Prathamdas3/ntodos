import prisma from '@/libs/db'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  await prisma.notes.delete({
    where: {
      id,
    },
  })

  revalidatePath('/notes')
  return NextResponse.json({ message: 'Success' }, { status: 200 })
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const body = await req.json()
  const { title, description, tags } = body

  await prisma.notes.update({
    where: { id },
    data: {
      title,
      description,
      tags,
    },
  })

  revalidatePath('/notes')
  return NextResponse.json({ message: 'Success' }, { status: 200 })
}
