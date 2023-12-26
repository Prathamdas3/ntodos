import { Settings, CircleUser, Gem } from 'lucide-react'

export default function Extra() {
  return (
    <section className="min-h-full flex flex-col justify-center">
      <div className="flex justify-center gap-6">
        <div>
          <Gem size={70} />
        </div>
        <div>
          <Settings size={70} />
        </div>
        <div>
          <CircleUser size={70} />
        </div>
      </div>
    </section>
  )
}
