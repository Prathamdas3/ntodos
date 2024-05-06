import { TodoModel } from '@/libs/mongoose.model'

const getData = async (id: string) => {
  const data = await TodoModel.findById(id)
  return data
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id)
  const tags = data?.tags?.split(',')

  return (
    <main className="container mx-auto ">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold">{data?.title}</h1>
        <p>{data?.description}</p>
        <ol>
          {tags?.map((tag: string, index: number) => (
            <li key={index}>{tag}</li>
          ))}
        </ol>
      </div>
    </main>
  )
}
