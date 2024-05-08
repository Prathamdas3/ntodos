'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { TodoType } from '@/libs/mongoose.model'
import { Trash2, Pen, X } from 'lucide-react'
import { deleteTodo } from '@/libs/api'
import { useApiContextProvider } from '@/libs/context'

export default function Todos() {
  const [data, setData] = useState<TodoType[]>([])
  const [todo, setTodo] = useState<string>('')
  const { edit, setEdit } = useApiContextProvider()

  useEffect(() => {
    ;(async function getData() {
      try {
        const res = await axios.get(`/api/todos`)
        setData(res.data.todos)
      } catch (error: unknown) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <section className="flex flex-col sm:flex-row gap-5">
      <div className="w-60  flex flex-col items-center">
        <h2 className="font-bold text-2xl pb-2 mb-4">Todos List</h2>

        <ol className="space-y-2">
          {data.map((e: TodoType) => (
            <li
              className={`flex justify-between ${
                edit ? 'gap-4' : 'gap-10'
              } hover:text-neutral-400 text-neutral-600`}
              key={e._id}
            >
              {edit ? (
                <input
                  value={todo}
                  key={e._id}
                  placeholder="Update your todo"
                  onChange={(e) => setTodo(e.target.value)}
                  className="bg-transparent outline-none w-48  border-b-[1px] border-neutral-600 "
                />
              ) : (
                <h4 className="font-medium text-lg ">{e.title}</h4>
              )}
              <div className="flex justify-around items-center gap-2 ">
                {edit ? (
                  <X
                    size={18}
                    className="cursor-pointer"
                    onClick={() => setEdit(!edit)}
                  />
                ) : (
                  <Pen
                    size={16}
                    className="cursor-pointer "
                    onClick={() => setEdit(!edit)}
                  />
                )}
                {edit ? undefined : (
                  <Trash2
                    size={16}
                    className="cursor-pointer "
                    onClick={() => deleteTodo(e._id)}
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
