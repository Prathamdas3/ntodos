'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Status from '@/components/status'
import axios from 'axios'
import { TodoType } from '@/libs/mongoose.model'

export default function Todos() {
  const [todo, setTodo] = useState<string>('')
  const [data, setData] = useState<TodoType[]>([])

  useEffect(() => {
    ;(async function getData() {
      try {
        const res = await axios.get(`http://localhost:3000/api/todos`)
        const todoSet = res.data.todos
          .sort(
            (a: TodoType, b: TodoType) =>
              b.createdAt.getTime() - a.createdAt.getTime()
          )
          .slice(0, 3)
        setData(todoSet)
      } catch (error: unknown) {
        console.error(error)
      }
    })()
  }, [])

  const submitData = async () => {
    if (todo !== '') {
      const res = await axios.post('http://localhost:3000/api/todos', {
        todo,
      })
      setTodo('')
    }
  }

  return (
    <section className="flex flex-col sm:flex-row gap-5">
      <div className="p-3">
        <h2 className="font-bold text-2xl p-3"> Add todo </h2>

        <form className="flex flex-col gap-4 mt-2 p-3">
          <div className="flex flex-col  gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="write todos here "
              className="rounded-lg bg-neutral-800 p-2 "
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              name="tags"
              id="tags"
              placeholder="tags should be separated with comma "
              className="rounded-lg bg-neutral-800 p-2 "
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-neutral-700 p-2 rounded-2xl font-bold text-2xl"
            onClick={submitData}
          >
            Add
          </button>
        </form>
      </div>
      <div className="w-60  flex flex-col items-center">
        <h2 className="font-bold text-2xl pb-2">Todos List</h2>

        {data.map((e: TodoType) => (
          <div
            className="flex justify-around  rounded-md pr-8 pl-2 py-1 space-x-2"
            key={e.id}
          >
            {/* <Status id={id} func={deleteTodo} /> */}
            <Link href={`/todos/${e.id}`}>
              <h4 className="font-medium text-lg hover:underline">{e.title}</h4>
            </Link>
          </div>
        ))}

        {data.length != 0 ? (
          <button className="border-[1px] border-neutral-500 px-4 py-2 rounded-lg mt-5">
            <Link href="/todos">See More</Link>
          </button>
        ) : undefined}
      </div>
    </section>
  )
}
