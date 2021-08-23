import { createContext, useState} from 'react'



export const UserContext =   createContext()
export const CounterContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState('')
    
    return <UserContext.Provider value={{user: user, setUser: setUser,}}>{children}</UserContext.Provider>
}

export const UserCounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0)
    return <CounterContext.Provider value={{ counter: counter, setCounter: setCounter}}>{children}</CounterContext.Provider>
}
