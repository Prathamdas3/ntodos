import prisma from '@/libs/db'

const getData = async (id: string) => {
  const data = await prisma.notes.findUnique({
    where: {
      id,
    },
  })
  return data
}

export default async function Page({ params }: any) {
  const data = await getData(params.id)
  return (
    <main className="container mx-auto ">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold">{data?.title}</h1>
      </div>
    </main>
  )
}
