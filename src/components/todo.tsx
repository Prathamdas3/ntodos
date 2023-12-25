export default function Todos() {
  return (
    <section className="flex   gap-5">
      <div className="p-3">
        <h2 className="font-bold text-2xl"> Add todo </h2>

        <form className="flex flex-col gap-4 mt-2 p-3">
          <input
            type="text"
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
      <div className="w-60 p-3">
        <h2 className="font-bold text-2xl">Todo List</h2>
        <div className="flex gap-2 hover:bg-neutral-900 rounded-md pr-6 pl-2 py-2 ">
          <input type="checkbox" className="p-2" />
          <p>1st todo</p>
        </div>
      </div>
    </section>
  )
}
