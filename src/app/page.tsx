import axios from 'axios'
import TodoSection from '@/components/todo'
import NoteSection from '@/components/note'
import PomodoroSection from '@/components/pomodoro'
import ExtraSection from '@/components/extra'

const getData = async () => {
  const { data } = await axios.get('http://localhost:3000/api/todos')
  return data
}

export default async function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="grid grid-rows-2 grid-cols-3 gap-4">
        <div className=" p-12 col-span-2 glass ">
          <TodoSection />
        </div>
        <div className="glass ">
          <PomodoroSection />
        </div>
        <div className="glass ">
          <ExtraSection />
        </div>
        <div className="glass p-8 col-span-2">
          <NoteSection />
        </div>
      </div>
    </main>
  )
}
