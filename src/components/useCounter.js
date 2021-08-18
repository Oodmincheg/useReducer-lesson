import {useEffect, useReducer} from 'react' 

   const  initialCount = { count: 0, doubleCount: 0 }

   const reducerFunction = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 };
      case 'decrement':
        if (state === 0) return state;
        return { ...state, count: state.count - 1 };
      case 'doubleIncrement':
        return { ...state, doubleCount: state.doubleCount + 2 };
      case 'doubleDecrement':
        return { ...state, doubleCount: state.doubleCount - 2 };
      default:
        return state;
    }
  };

function useCounter() {
    
const [state, dispatch] = useReducer(reducerFunction, initialCount);

  useEffect(() => {
     console.log(state.count)
  }, [state.count])

  return [state, dispatch]
}

export default useCounter;
