import { FileSpreadsheet } from 'lucide-react'
import prisma from '@/libs/db'
import { addNote } from '@/libs/actions'
import Link from 'next/link'

export default async function Page() {
  const notes = await prisma.notes.findMany()

  return (
    <section className="container mx-auto p-5 border-x-[1px] border-neutral-700 min-h-screen">
      <div className="p-3">
        <h2 className="font-bold text-2xl p-3 text-center"> Add Note </h2>

        <form className="flex gap-4 justify-center mt-5" action={addNote}>
          <input
            type="text"
            name="title"
            placeholder="write title of note here "
            className="rounded-lg bg-neutral-800 p-3 w-96"
            required
          />
          <button
            type="submit"
            className="bg-neutral-700  rounded-lg font-semibold text-xl p-3"
          >
            Add
          </button>
        </form>
      </div>
      <div className=" mt-4 ">
        <h2 className="font-bold text-2xl pb-2 text-center border-b-[1px] border-neutral-500">
          Note List
        </h2>
        <div className="overflow-hidden grid grid-cols-5 gap-4 p-5 justify-center items-center">
          {notes.map(({ id, title }) => (
            <Link
              href={`/details/${id}`}
              className="flex gap-2 items-center justify-center hover:underline rounded-md pr-8 pl-2 py-1 cursor-pointer"
              key={id}
            >
              <FileSpreadsheet />
              <h4 className="font-medium text-lg">{title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
