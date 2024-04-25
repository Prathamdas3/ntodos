'use client'
import { useState } from 'react'

export default function Promo() {
  //Todo fix this pomodoro section and then its complete
  const [mins, setMins] = useState<number>(25)
  const [secs, setSecs] = useState<number>(0)
  const [isOn, setIsOn] = useState<boolean>(false)

  setInterval(() => setMins(mins > 0 ? mins - 1 : 0), 60 * 1000)
  setInterval(() => setSecs(secs > 0 ? secs - 1 : 0), 1000)

  return (
    <section className="flex flex-col justify-center items-center min-h-full gap-2">
      <div className="flex gap-2">
        {isOn ? (
          <p className="font-bold text-2xl bg-transparent inline-block w-8">
            {mins}
          </p>
        ) : (
          <input
            className="font-bold text-2xl bg-transparent inline-block w-8"
            placeholder={`${mins}`}
            defaultValue={isOn ? 25 : mins}
            disabled={isOn}
            onChange={(e) => setMins(Number(e.target.value))}
          />
        )}

        <span className="bold text-2xl">:</span>
        {isOn ? (
          <p className="font-bold text-2xl bg-transparent inline-block w-8">
            {secs}
          </p>
        ) : (
          <input
            className="font-bold text-2xl bg-transparent inline-block w-8"
            placeholder={`${secs}`}
            defaultValue={isOn ? 0 : secs}
            disabled={isOn}
            onChange={(e) => setSecs(Number(e.target.value))}
          />
        )}
      </div>

      <button className="font-bold text-xl" onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Pause' : 'Start'}
      </button>
    </section>
  )
}
