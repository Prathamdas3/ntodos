import TodoSection from '@/components/todo'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="grid grid-rows-2 grid-cols-3 gap-4">
        <div className=" p-12 col-span-2 glass ">
          <TodoSection />
        </div>
        <div className="glass ">2</div>
        <div className="glass ">2</div>
        <div className="glass p-8 col-span-2">
          <TodoSection />
        </div>
      </div>
    </div>
  )
}
