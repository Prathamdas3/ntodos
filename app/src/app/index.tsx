import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  RefreshControl,
} from 'react-native'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
type TodoType = {
  title: string
  _v: 0
  _id: string
  createdAt: Date
  updatedAt: Date
}

export default function Index() {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<TodoType[]>([])
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const getTodos = async () => {
    try {
      const { data } = await axios.get('https://ntodos.vercel.app/api/todos')

      setTodos(data.todos)
    } catch (error: unknown) {
      console.error(error)
    }
  }
  useEffect(() => {
    getTodos()
  })

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    getTodos()
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  const onPress = async () => {
    try {
      const res = await axios.post('https://ntodos.vercel.app/api/todos', {
        title: value,
      })
      setValue('')
      return res
    } catch (error: unknown) {
      console.error(error)
    }
  }
  return (
    <SafeAreaView className="flex justify-center min-h-screen p-5">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text className="my-4 text-3xl font-bold text-center">Add Todo</Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => setValue(text)}
          value={value}
          className="px-4 my-4 border-2 rounded-xl"
        />
        <Button
          title="Submit"
          accessibilityLabel="Button to submit Todos"
          onPress={onPress}
        />
        <View className="my-4">
          <Text className="my-4 text-xl font-semibold text-center">
            Your Todos
          </Text>
          <ScrollView className="p-5 border-2 rounded-xl ">
            {todos?.map((todo, i) => (
              <View key={todo._id} className="items-center flex-1 ">
                <Text className="space-x-2">{i + 1}.</Text>
                <Text>{todo.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
