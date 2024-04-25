import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET() {
  const todos = await prisma?.notes.findMany()
  return NextResponse.json({ todos }, { status: 200 })
}

export async function POST(req: Request) {
  const body = await req.json()
  await prisma?.notes.create({
    data: {
      ...body,
    },
  })
  revalidatePath('/notes')
  return NextResponse.json({ message: 'Success' }, { status: 200 })
}
