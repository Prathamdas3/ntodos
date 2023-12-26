import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET() {
  const todos = await prisma?.todos.findMany()
  return NextResponse.json({ todos }, { status: 200 })
}

export async function POST(req: Request) {
  const body = await req.json()
  await prisma?.todos.create({
    data: {
      ...body,
    },
  })
  revalidatePath('/todos')
  return NextResponse.json({ message: 'Success' }, { status: 200 })
}
