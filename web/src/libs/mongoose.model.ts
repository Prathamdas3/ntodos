import mongoose, { Schema, model, Document } from 'mongoose'

export type TodoType = Document & {
  title: string

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
  },
  { timestamps: true }
)

export const TodoModel =
  (mongoose.models.Todo as mongoose.Model<TodoType>) ||
  model<TodoType>('Todo', todoSchema)
