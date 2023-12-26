'use client'

export default function Status({ deleteTodo, id }: any) {
  return <input type="checkbox" onChange={() => deleteTodo(id)} />
}
