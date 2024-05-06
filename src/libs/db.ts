import mongoose from 'mongoose'

type ConnectionObjectType = {
  isConnected?: number
}

const connection: ConnectionObjectType = {}

export default async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log('Already connected to database')
    return
  }
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL || '', {})

    connection.isConnected = db.connection.readyState

    console.log('DB connection Successfully')
  } catch (error: unknown) {
    console.error('Database Connection failed', error)
    process.exit(1)
  }
}
