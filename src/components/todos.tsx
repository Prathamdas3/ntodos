import prisma from '@/libs/db'
import { addTodo } from '@/libs/actions'
import Link from 'next/link'
import Status from '@/components/status'
import axios from 'axios'

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

export default async function Todos() {
  const todos = await prisma.todos.findMany()
  const sortedTodos = todos.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  )
  const data = [sortedTodos[0], sortedTodos[1], sortedTodos[2]]

  return (
    <section className="flex  gap-5">
      <div className="p-3">
        <h2 className="font-bold text-2xl p-3"> Add todo </h2>

        <form action={addTodo} className="flex flex-col gap-4 mt-2 p-3">
          <input
            type="text"
            name="title"
            placeholder="write todos here "
            className="rounded-lg bg-neutral-800 p-2 "
          />

          <button
            type="submit"
            className="bg-neutral-700 p-2 rounded-2xl font-bold text-2xl"
          >
            Add
          </button>
        </form>
      </div>
      <div className="w-60  flex flex-col items-center">
        <h2 className="font-bold text-2xl pb-2">Note List</h2>

        {data.map(({ id, title }) => (
          <div
            className="flex justify-around  rounded-md pr-8 pl-2 py-1 space-x-2"
            key={id}
          >
            <Status id={id} deleteTodo={deleteTodo} />
            <Link href={`/todos/${id}`}>
              <h4 className="font-medium text-lg hover:underline">{title}</h4>
            </Link>
          </div>
        ))}
        <button className="border-[1px] border-neutral-500 px-4 py-2 rounded-lg mt-5">
          See More
        </button>
      </div>
    </section>
  )
}