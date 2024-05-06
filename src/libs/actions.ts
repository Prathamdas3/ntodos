// 'use server'
// import dbConnect from '@/libs/db'
// import { revalidatePath } from 'next/cache'

// export async function addNote(formData: FormData) {
//   const title = formData.get('title')
//   const data = await ({
//     data: {
//       title: title as string,
//     },
//   })

//   revalidatePath('/notes')
// }

// export async function addTodo(formData: FormData) {
//   const title = formData.get('title')

//   const data = await prisma.todos.create({
//     data: {
//       title: title as string,
//     },
//   })

//   revalidatePath('/todos')
// }
