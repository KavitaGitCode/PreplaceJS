# What is Redux?

React Redux is a state management library for React applications. Redux simply helps to manage the state of your application or in other words, it is used to manage the data of the application.

# which library we used for react-redux
1. npm install @reduxjs/toolkit and react-redux (Redux Toolkit)
2. npm install react-redux

# Why should I use Redux?

1. When you have large amount of application state that are needed in many places in the app.
2. The app state is updated frequently over time.
3. The logic to update that state may be complex.
4. The app has a medium or large-sized codebase, and might be worked on by many people.

# what are the three core principle that redux-follow?

## a)Single source of truth: 
The state of an entire application is stored in a single store object.


configureStore

```javascript
import { configureStore } from '@reduxjs/toolkit'
  
export const store = configureStore({ 
    reducer: {}, 
})
```

Providing Store to entire React application:
```javascript
import { Provider } from 'react-redux'; 
import { store } from './store.js'; 

 <Provider store={store}> 
    <App /> 
  </Provider>, 
```

Creating A Redux Slice

```javascript
import { createSlice } from '@reduxjs/toolkit'; 
  
const initialState = { 
  name: [], 
  food: [], 
}; 
  
const customerSlice = createSlice({ 
  // An unique name of a slice 
  name: 'customer', 
  
  // Initial state value of the reducer 
  initialState, 
  
  // Reducer methods 
  // takes the current state of the store and an action as parameters. Reducers calculate the new state based on the action it receives. Reducers are the only way the store's current state can be changed within a Redux application.
  reducers: { 
    addCustomer: (state, { payload }) => { 
      state.name.push(payload); 
    },  
  }, 
}); 
  
// Action creators for each reducer method 
export const { addCustomer, orderFood } = customerSlice.actions; 
              
export default customerSlice.reducer;
```

# Update the configureStore

```javascript
import { configureStore } from '@reduxjs/toolkit'; 
import reducer from './slice.js'; 

export default configureStore({ 
reducer: { 
	customers: reducer, 
}, 
});
```

# to read the redux store values (useSelectore) and dispatch actions (useDispatch)

 Using Redux state and actions in Components: We can use the react-redux hooks (useSelectore and useDispatch) to read the redux store values and dispatch actions to the reducers.

```javascript
import { useDispatch, useSelector } from 'react-redux'; 

  // Using useSelector hook we obtain the redux store value 
  const food = useSelector((state) => state.customers.food); 

  // Using the useDispatch hook to send payload back to redux 
  const dispatch = useDispatch(); 
  const addCustomer = () => dispatch(addCusotmer(customerId)); 
```

#  What are reducers in Redux's architecture?

Reducers in Redux's architecture are pure functions that are used to take the previous state and an action and return the next state. Its syntax is given below:

# Describe what is meant by a "store" in Redux?

“Store” in Redux is used to carry together all the states, reducers, and actions which create the app. Some of the responsibilities of the store are as follows:

The state of the current application from inside is held by the Redux Store.
We can access the current state using store.getState().
We can update the state using store.dispatch(action).
We can also register listener callbacks using the store.subscriber(listener).


# How to connect react app with redux store (interview)
We used Provider componenet provided by 'react-redux' library.
to main <App > we provide <Provider> compoenent as pass store as props
eg <Provider store={store}>
      <App />
    <Provider>  

# Role of "useSelector" 
 import from react-redux
  We can read the store state from this hook
  1. hooks accepts function as its parameter
  eg
 ```javascript
  let cakeCount = useSelector((state) => state.cake.numofCake);
 ```
  state: referes to state which contains multiple reducers
  cake : is the key which we mention in configure store in reducer object and give its value cakeSlice
  numofCake: we mention it in initialState
  eg
  ```javascript
  const store = configureStore({
    reducer: {
        cake: cakeSlice,
        icecream: iceCreameSlice,
        user: userSlice
    }
});
  ```

# Role of useDispacth  
