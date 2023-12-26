import { FileSpreadsheet } from 'lucide-react'
import prisma from '@/libs/db'
import { addNote } from '@/libs/actions'
import Link from 'next/link'

export default async function Notes() {
  const notes = await prisma.notes.findMany()

  return (
    <section className="flex   gap-5">
      <div className="p-3">
        <h2 className="font-bold text-2xl p-3"> Add Note </h2>

        <form className="flex flex-col gap-4 mt-2 p-3" action={addNote}>
          <input
            type="text"
            name="title"
            placeholder="write title of note here "
            className="rounded-lg bg-neutral-800 p-2 "
            required
          />
          <button
            type="submit"
            className="bg-neutral-700 p-2 rounded-2xl font-bold text-2xl"
          >
            Add
          </button>
        </form>
      </div>
      <div className="w-60 p-3">
        <h2 className="font-bold text-2xl pb-2">Note List</h2>
        {notes.map(({ id, title }) => (
          <Link
            href={`/details/${id}`}
            className="flex gap-2 hover:underline rounded-md pr-8 pl-2 py-1 "
            key={id}
          >
            <FileSpreadsheet />
            <h4 className="font-medium text-lg">{title}</h4>
          </Link>
        ))}
      </div>
    </section>
  )
}
