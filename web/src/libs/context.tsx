'use client'
import { useState, useEffect, createContext, useContext } from 'react'

type childT = {
  children: React.ReactNode
}

type ApiType = {
  edit: boolean
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const ApiContext = createContext<ApiType | null>(null)

export const ContextProvider = ({ children }: childT) => {
  const [edit, setEdit] = useState<boolean>(false)
  const data = { edit, setEdit }
  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
}

export const useApiContextProvider = () => {
  const contextData = useContext(ApiContext)
  if (!contextData) {
    throw new Error('context must be used inside the provider')
  }
  return contextData
}
