import React, { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext();

export default function ContextProvider({children}) {
  const [city, setCity] = useState("London")
  const [data, setData] = useState({})
  const [symbol, setSymbol] = useState()
  

  return (
    <Context.Provider value={{city, setCity, data, setData, symbol, setSymbol}}>{children}</Context.Provider>
  )
}

