import mongoose, { Schema, model, Document } from 'mongoose'

export type TodoType = Document & {
  title: string
  description?: string
  tags?: string
  isComplete?: boolean
  createdAt: Date
  updatedAt: Date
}

export type NoteType = Document & {
  title: string
  description?: string
  tags?: string
  isComplete?: boolean
  createdAt: Date
  updatedAt: Date
}

const todoSchema: Schema<TodoType> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
    },
    tags: {
      type: String,
    },
    isComplete: {
      type: Boolean,
    },
  },
  { timestamps: true }
)

const noteSchema: Schema<NoteType> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
    },
    tags: {
      type: String,
    },
    isComplete: {
      type: Boolean,
    },
  },
  { timestamps: true }
)

export const TodoModel =
  (mongoose.models.Todo as mongoose.Model<TodoType>) ||
  model<TodoType>('Todo', todoSchema)
export const NoteModel =
  (mongoose.models.Note as mongoose.Model<NoteType>) ||
  model<NoteType>('Note', noteSchema)
