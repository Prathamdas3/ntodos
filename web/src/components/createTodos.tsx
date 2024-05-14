'use client'
import { useState } from 'react'
import axios from 'axios'

export default function CreateTodos() {
  const [todo, setTodo] = useState<string>('')

  const submitData = async () => {
    try {
      const res = await axios.post('/api/todos', {
        title: todo,
      })
      setTodo('')
      return res
    } catch (error: unknown) {
      console.error(error)
    }
  }

  return (
    <section>
      <div className="p-3">
        <h2 className="font-bold text-2xl p-3"> Add todo </h2>

        <div className="flex flex-col gap-4 mt-2 p-3">
          <div className="flex flex-col  gap-2">
            <label htmlFor="title">Title</label>

            <input
              type="text"
              name="title"
              id="title"
              placeholder="write todos here "
              className="rounded-lg bg-neutral-800 p-2 "
              value={todo}
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
        </div>
      </div>
    </section>
  )
}
