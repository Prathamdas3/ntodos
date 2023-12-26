'use server'
import prisma from '@/libs/db'
import { revalidatePath } from 'next/cache'

export async function addNote(formData: FormData) {
  const title = formData.get('title')
  const data = await prisma.notes.create({
    data: {
      title: title as string,
    },
  })

  revalidatePath('/note')
}
