'use client'
import { useState } from 'react'
import { RotateCw } from 'lucide-react'

export default function Promo() {
  const [mins, setMins] = useState<number>(25)
  // const [secs, setSecs] = useState<number>(0)
  const [isOn, setIsOn] = useState<boolean>(false)

  const reset = () => {
    setMins(25)
    setIsOn(false)
    // setSecs(0)
  }

  if (isOn) {
    setInterval(() => setMins(mins > 0 ? mins - 1 : 0), 60 * 1000)
    if (mins == 0) {
      setIsOn(false)
      setMins(25)
    }
  }

  // setInterval(() => setSecs(secs > 0 ? secs - 1 : 0), 1000)

  return (
    <section className="flex flex-col justify-center items-center min-h-full gap-2 py-12 sm:py-0">
      <div className="flex gap-2">
        {isOn ? (
          <p className="font-bold text-2xl bg-transparent inline-block w-8">
            {mins < 10 ? '0' + mins : mins}
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
        <p className="font-bold text-2xl bg-transparent inline-block w-8">
          {mins < 2 ? 'min' : 'mins'}
        </p>
        {/* <span className="bold text-2xl">:</span>
        {isOn ? (
          <p className="font-bold text-2xl bg-transparent inline-block w-8">
            {secs < 10 ? '0' + secs : secs}
          </p>
        ) : (
          <input
            className="font-bold text-2xl bg-transparent inline-block w-8"
            placeholder={`${secs}`}
            defaultValue={isOn ? 0 : secs < 10 ? '0' + secs : secs}
            disabled={isOn}
            onChange={(e) => setSecs(Number(e.target.value))}
          />
        )} */}
      </div>

      <div className="flex flex-col items-center justify-center gap-y-2">
        <button className="font-bold text-2xl" onClick={() => setIsOn(!isOn)}>
          {isOn ? 'Pause' : 'Start'}
        </button>
        {isOn ? <RotateCw size={20} onClick={reset} /> : undefined}
      </div>
    </section>
  )
}
