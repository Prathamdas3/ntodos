import PomodoroSection from '@/components/pomodoro'
import CTS from '@/components/createTodos'
import STS from '@/components/showTodos'

export default async function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex  gap-x-3">
        <div className="flex flex-col gap-2">
          <div className="glass sm:col-span-2 p-12 ">
            <CTS />
          </div>
          <div className="glass p-20 border-0">
            <PomodoroSection />
          </div>
        </div>

        <div className="p-20 glass">
          <STS />
        </div>
      </div>
    </main>
  )
}
