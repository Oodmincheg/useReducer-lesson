import {useContext} from 'react'
import Counter from './components/Counter';
import LoginForm from './components/LoginForm'
import {UserContextProvider, Context} from './components/userContext'

function App() {

  
  return <UserContextProvider>
    <LoginForm />
    <Counter />
  </UserContextProvider>
   
}

export default App;




