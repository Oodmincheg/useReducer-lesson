import { useContext } from 'react';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import {
  UserContextProvider,
  Context,
  UserCounterProvider,
} from './components/userContext';

function App() {
  return (
    <>
     <UserCounterProvider>
      <UserContextProvider>
        <LoginForm />

       
          <Counter />
      </UserContextProvider>
      </UserCounterProvider>


    </>
  );
}

export default App;
