import prisma from '@/libs/db'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  await prisma.todos.delete({
    where: {
      id,
    },
  })
  console.log(id)
  revalidatePath('/todos')
  return NextResponse.json('got the id')
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const data = req.json()

  await prisma.todos.update({
    where: { id },
    data: {},
  })

  return NextResponse.json({ data })
}
