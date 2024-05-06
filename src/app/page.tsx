import axios from 'axios'
import PomodoroSection from '@/components/pomodoro'
import ExtraSection from '@/components/extra'
import Todos from '@/components/todos'
import Notes from '@/components/notes'

const getData = async () => {
  const { data } = await axios.get('http://localhost:3000/api/todos')
  return data
}

export default async function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="grid sm:grid-cols-3 grid-clos-1 sm:gap-4 gap-2">
        {/* <div className=" glass ">
          <ExtraSection />
        </div>
        <div className="glass sm:col-span-2 p-12 ">
          <Todos />
        </div>
        <div className="glass p-8 sm:col-span-2">
          <Notes />
        </div>
        <div className="glass ">
          <PomodoroSection />
        </div> */}
        <div className="glass ">
          <PomodoroSection />
        </div>
        <div className="glass sm:col-span-2 p-12 ">
          <Todos />
        </div>
      </div>
    </main>
  )
}
