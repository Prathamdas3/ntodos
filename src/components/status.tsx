'use client'

export default function Status({ func, id }: any) {
  return <input type="checkbox" onChange={() => func(id)} />
}
