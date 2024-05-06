import prisma from '@/libs/db'
import { TodoModel } from '@/libs/mongoose.model'
import Link from 'next/link'
import Status from '@/components/status'
import axios from 'axios'
import { getData } from '@/libs/api'

const deleteTodo = async (id: string) => {
  'use server'

  const url = `http://localhost:3000/api/todos/${id}`
  try {
    const { data } = await axios.delete(url)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export default async function Page() {
  const todos = await getData('todos')

  return (
    <section className="container mx-auto p-5 border-x-[1px] border-neutral-700 min-h-screen">
      <div className="p-3">
        <h2 className="font-bold text-2xl p-3 text-center"> Add todo </h2>

        <form className="flex gap-4 justify-center mt-5">
          <input
            type="text"
            name="title"
            placeholder="write todos here "
            className="rounded-lg bg-neutral-800 p-3 w-96"
          />

          <button
            type="submit"
            className="bg-neutral-700  rounded-lg font-semibold text-xl p-3"
          >
            Add
          </button>
        </form>
      </div>
      <div className="mt-4 ">
        <h2 className="font-bold text-2xl pb-2 text-center border-b-[1px] border-neutral-500">
          Note List
        </h2>
        <div className="overflow-hidden grid grid-cols-7 gap-4 p-5 justify-center items-center">
          {/* {todos.map(({ id, title }: { id: string; title: string }) => (
            <div
              className="flex gap-2 items-center justify-center hover:underline rounded-md pr-8 pl-2 py-1 cursor-pointer"
              key={id}
            >
              <Status id={id} deleteTodo={deleteTodo} />
              <Link href={`/todos/${id}`}>
                <h4 className="font-medium text-lg hover:underline">{title}</h4>
              </Link>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  )
}
