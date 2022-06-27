import { createContext,useState,useContext,useEffect } from "react";

const context = createContext()


export default function Context({children}){

    const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('todo')) || [])

    useEffect(() => {
        localStorage.setItem('todo',JSON.stringify(todos))
      },[todos])

    return (
        <context.Provider value={{todos,setTodos}}>
            {children}
        </context.Provider>
    )
}

export const useContextCustom = () => useContext(context)