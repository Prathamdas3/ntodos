import axios from 'axios'

export const deleteTodo = async (id: string) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/todos/${id}`)
    return res
  } catch (error: unknown) {
    console.error(error)
  }
}

export const updateTodo = async (id: string, content: string) => {
  try {
    const res = await axios.patch(`http://localhost:3000/api/todos/${id}`, {
      title: content,
    })
    return res
  } catch (error: unknown) {
    console.error(error)
  }
}
