export default function Promo() {
  return (
    <section className="flex flex-col justify-center items-center min-h-full gap-2">
      <div className="flex gap-2">
        <input
          className="font-bold text-2xl bg-transparent inline-block w-8"
          placeholder="25"
        />
        <span className="bold text-2xl">:</span>
        <input
          className="font-bold text-2xl bg-transparent inline-block w-8"
          placeholder="00"
        />
      </div>

      <button className="font-bold text-xl">Start</button>
    </section>
  )
}
