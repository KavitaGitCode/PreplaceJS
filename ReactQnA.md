# ReactJS is a Javascript UI library which is very helpful in building intelligent complex UIs, 
It uses the compoenent based approach, which ensure to help to build component that process high reusability.

 create-react-app is a CLI tool for setting up or bootstrapping a boilerplate dev setup to make React applications.

# Important Features of React
React make use of single-direction data flow model
React uses Virtual DOM that has many advantages of its won
It deals with complete server-side data processing and handling

# Why do we need React and React DOM? (Interview 1)
React is used to create component whereas the ReactDom is used to convert that component into actual DOM, Node elements so browser will able to understand the code of React.
React DOM helps to build : WEB UI
React Native helps to craft : Mobile APP

# what is rendering?

Redering meaning calling component (trigger the component) once again but with the updated value

calling === rendering (calling component is equivalent to rederning component)

load page << Render << Feching (useEffect) << Render

Whenever state variable update, react triggers a reconciliation cycles(re-render the components)

# Re-rendering

Re-rendering is one of the most important things to understand in
React. This is when React updates the component with the new data and
triggers all the hooks that depend on that data. Without these, there will
be no data updates in React and, as a result, no interactivity. The app will
be completely static. And state update is the initial source of all rerenders in React apps.

# Types of Components (INTERVIEW 2)
# What is the difference between class component and function component? (Interview 3)

Function component is defiend by function where as class component is defiend by class keyword.

Function Component is normal Javascript function. Class Component use the class Syntax.

.Class-based Components - Old way of writing code.
Class component can manage their state, and they have life-cycle methods where as initially function component don’t have state management and lifecycle method that’s why they called stateful and stateless component respectively, but in 2019 in react version 16.8 react introduce hooks …where we can use useState(maintain state) and useEffect (for lifecycle pattern) 

# What is stateless and stateful component? (INTERVIEW 1)

if we are not using any state in the componenet then it becomes stateless componenet
without useState === stateless

and the componenet using ustate as variable to store data is called statefull component
with useState === statefull

before 16.8 version : react didn't introduce useState hooks so function component don’t have state management and lifecycle method that’s so we called function component as stateless compoenent and 

class component to Statefull component as they manage their own state, they have lifecycle methods (like componentDidMount, componentDidUpdate, etc.).

# What is the difference between Props and State?
 the main difference between props and state is that the props are a way to pass the data or properties from one component to other components while the state is the real-time data available to use within that only

# What is Virtual DOM? Why React is fast (INTERVIEW)
It is a js object, that is representation of Actaul Dom. 
It can consider as node tree, which consist of elements, their attributes, and other properties
DOM manipulation is very expenssive and react is very efficient to doing this.
the whole component re-render only update the changing part not the entire (remember reconciliation...old dom and new dom and show the update dom)...
## REACT is FAST because
1. react fiber
2. new reconciliation algo (which find the difference between the two virtual dom and only update the reuired part in that changes happens)
3. the whole component re-render only update the changing part not the entire (remember reconciliation...old dom and new dom and show the update dom)

# What is Virtual DOM? What is the difference between DOM and Virtual DOM? Why do we need Virtual DOM
# What Is Reconciliation Diff Algorithm, React Fiber? How the virtual Dom is faster? (INTERVIEW)

 It it momoery representation of actual DOM. Which helps to improve perforamance and changes of actual DOM by reduing number of expensive DOM Manipulation.

 DOM (document object model) that represents web page like tree structure Dom, which allow JS to dynamically added, update, manipulate node in the structure of web page.
Basically in the plain JS if we add or change some thing on the page, the whole layout will be re-render which will refresh the entire DOM, that’s why react brings the concept of virtual Dom, in that react behind the scene react create exact copy of real dom. And if you make changes in it, react  uses( React Fiber is a Reconciliation Diff Algorithm) will keep track between the  previous and current version of DOM, whatever update will reflect on Actual Dom on Browser. that why react is faster because its avoid refreezing entire page which improves performance.

# What is JSX? Why Dd we need JSX? (INTERVIEW)
JSX is HTML-like or XML-like syntax. JSX stands for JavaScript XML. It's a syntax extension for JavaScript
React create components. 
Component -> internally react create component instance state -> it generate element -> then it generate Plain Object…which contains type, key, ref, prop, key children, symbol…but this is not maintainable and expressive, its very difficult to parse that’s why JSX exist
This process generate TREE of elements, This knows as virtual Dom….this is core guide principle.
C, CIS, E, PO, it contains t, k,r, p, c, s…this is difficult to parse that why JSX exist.
Directly browser can't read JSX file. Borwser can read Javascript Object (JSX transformer Bable)

# What is Pure Component? (INTERVIEW 5) and syntax 

By default react component are Pure component

whenever we call the Pure component it will always return the same output 

eg: this is the example of pure component as the output will never change whenever the component is called
```javascript
const searchBar = () => {
  return <p>Search Result Bar</p>
}
```
so the key difference is whenever you pass the input if output remains same it means its pure component
and if we passed input and output is different based on the same input its impure component

PureComponent is similar to Component but it skips(optimise) re-renders for same props and state. 
Pure component optimise re-renders and thus improves performance. Skipping unnecessary re-renders for class components. 

```javascript
const PureComponent = React.memo(({ name }) => {
  console.log('Rendering PureComponent');
  return (
    <div>
      Hello, {name}!
    </div>
  );
});

export default PureComponent;
```
PureComponent is a functional component wrapped with React.memo. This means it only re-renders if its props change. If the name prop is the same, it will not re-render, making it pure.

# lifecycles of class component? (Interview 2)

1. Component Mount (Initial Render) 
   a. A component “mounts” when it renders for the first time.
   b. fresh props and state created 

2. Component Re-render (Update)
    a. State and props changes
    b. parents re-render
    c. context changes

3. Component Un-mount (Component Destroy)
    a. A component’s unmounting period occurs when the component is removed from the DOM. 
    b. state and props destroy
    c. user navigates to a different website or closes their web browser or app.
    d. DOM is rerendered without the component,


# Controlled vs Uncontrolled Components in ReactJS (INTERVIEW 3)

In React,controlled components and uncontrolled components refer to how form elements are managed within a component.

## Uncontrolled
Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). Instead of using state to control the value of the input, you use a ref to get the value from the DOM.
For instance, if we want to add a file as an input, this cannot be controlled as this depends on the browser so this is an example of an uncontrolled input.

 ```javascript
 const inputRef = useRef(null); //You can store and persist value in between renders
 
    function handleSubmit() {
        alert(`Name: ${inputRef.current.value}`);
    }
 <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input
                    type="text"
                    name="name"
                    ref={inputRef}
                />
                <button type="submit">Submit</button>
            </form>
 ```

## Controlled Components
Controlled component in react refer to the compoenent have ability to maintain their state.  Controlled components refer to the components where the state and behaviors are controlled by Parent components.
 
In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

 ```javascript
 const [name, setName] = useState("");
 
    function handleSubmit() {
        alert(`Name: ${name}`)
        }

         <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input
                     name="name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />
                <button type="submit">Submit</button>
            </form>
 ```    

# What is useRef();

ref link: D:\Preplaced\React\Project\React30\react-30-days\src\components\UseRefDemo.jsx

useRef hook will help you to keep reference a value that’s not needed for rendering.
You can store and persist value in between renders

useRef returns a ref object with a single "current" property initially set to the initial value you provided. You can change its current property to store information and read it later. 

IMP: Changing a ref does not trigger a re-render of the component. 

USecase
. It's commonly used for 
accessing and managing DOM elements directly, 
storing persistent values, value that’s not needed for rendering.
Tracking Previous State or Props: It helps in keeping track of a component's previous state or props to compare with current values.
IMP: Changing a ref does not trigger a re-render of the component. 

In summary, useRef is best used for:

Accessing and manipulating DOM elements.
Storing mutable values that do not trigger re-renders.
Persisting values between renders.
Storing previous state values.

//Referencing a value with a ref
```javascript
export default function Counter(){
  let ref = useRef(0);

  function showCounter(){
    ref.current = ref.current + 1;
    alert(`You clicked ${ref.current} times`)
  }

  return(
    <button onClick={showCounter}>Click me</button>
  )
}

```
Manipulating the DOM with a ref...eg input element you can access the ref with ref attribute eg..
<input type="text" name="name" ref={inputRef} />

# What are the HOC in react? (INTERVIEW 4 TRY code)

Higher Order Component, is a function that take component as an argument return new component with updated values (or we can say  additional properties or behavior). 

Basically we have comman logic in single place and share it across many compoenents. This is where HOC gets shine

However, if we want to add this same functionality into other components in our application, then we would have to repeat the same code, again in the other components. it helps enhancing component modularity.

To prevent this we can wrap the logic to detect the hover in a Higher Order Component, lets see an updated example using Higher Order Components.

## Use Cases
1. For sharing code: avoid to repeat code
1. State Management and Handling of Async Data
3. Caching and Memoizing 
4. Styling: Apply same styles or Themes to compnents
5. Conditiona Rendering

is Real example of HOC
> React.Memo
> React redux 'connect' compoenet 

Using HOCs for data fetching offers several benefits, including encapsulating data fetching logic, promoting code reuse, and enhancing component modularity. 

1. It’s technique that allows you to use to re-use logic, across multiple component. 
2. keeping our code DRY principle (you don't have to write repeated code in multiple components.)
3. our components clean and focused.

# Drawback or Disadvantage 
Name Collision for Props
if you are passing more than one HOC ...it would be difficult for debugging 

CODE EXAMPLE
React\Project\interview-component\src\components\HOC-Eg
React\Project\interview-component\src\HOC

# HOw to resolve : CUstome Hooks


# Updating state based on the previous state 
Suppose the age is 42. This handler calls setAge(age + 1) three times:

# Explain this function why this function beheving like this
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}
However, after one click, age will only be 43 rather than 45! This is because calling the set function does not update the age state variable in the already running code. So each setAge(age + 1) call becomes setAge(43).

To solve this problem, you may pass an updater function to setAge instead of the next state:

function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}
Here, a => a + 1 is your updater function. It takes the pending state and calculates the next state from it.

React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:

a => a + 1 will receive 42 as the pending state and return 43 as the next state.
a => a + 1 will receive 43 as the pending state and return 44 as the next state.
a => a + 1 will receive 44 as the pending state and return 45 as the next state.
There are no other queued updates, so React will store 45 as the current state in the end.

By convention, it’s common to name the pending state argument for the first letter of the state variable name, like a for age. However, you may also call it like prevAge or something else that you find clearer.

# What is useState and useEffect hooks in functional component?

useState : we use this hook to store our data in local state variable to your component.
Whenever state change component re-render again.

set functions, like setSomething(nextState), useState lets you update the state to a different value and trigger a re-render. You can pass the next state directly, or a function that calculates it from the previous state

useEffect: it means that we want to register side effect, what i ment by this , load the data inside useeffect wala after the component, has been painted onto th screen.
eg: fetching data, timer, subscription, subscribing to external events, or manually changing the DOM.

it has 2 argumets 1 is callback function, 2nd dependancy arrey
1. without array: useEffect will run every render
2. with []: it will runs only when compoent mount (initial render), as we didn't mention any dependancies in it.
3. with [dependancyArra1, dependancyArray2]...runs only when compoent mount (initial render) and whenver the state variable change the depency array change it will re-render

* note: It combines the functionality of componentDidMount , componentDidUpdate , and componentWillUnmount in class components.

ref path:  React\Project\interview-component\src\components\useEffect-Cleanup

# What is props
   Props is an object... 
  Passing props to function is just like passing arguments to function. Passing props to a component means passing data dynamically from one component to another component.

  Props are read-only compoenent that are immutable in nature

# Why we use Key 
  not putting keys is not accessible : react will give you warning
  to identify unique of newly added item in map loop.
  React official doc's say never use "index" as key  

  Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

# How to optimize React App
1. Lazy Loading / Code Splitting

  Large bundle size can increase the initial loading time of your application.
  With React.lazy, you can lazily load components to improve initial load times, which means component load when they are needed.
  if you have heavy files that will slow down your application.
  so to metigate the loading performance we used Lazy Load to optimise the application
  so when compoent load 

  code splitng : is a technique that allows to split your code into smaller chunk, which are loaded on demand.

  It helps to reduce the inital bundle size and improve the loading performance of your application.

  ```javascript
  import {Suspense} form 'react'
  //React.lay dynamically import components
  let MyComponent = React.lazy(() => import("mention your path"));
  //fallback: is another compoent
  //<Suspense> lets you display a fallback UI until its children(Component) is being loaded.

  <Suspense fallback={<p>This content is loading</p>}>
    <MyComponent />
  </Suspense>
  ```

2. useMemo...React is used for memoizing expensive calculations
useMemo hook lets you cache the result value of a calculation between re-rendering.
This can be useful for avoiding costly calculations on every render.
due to this, it optimise the performance by avoiding unnecessary re-computation of expensive operations 
When props change, the component re-render and if there is any heavy function that will depend on props change ...it will compute again and again
 to avoid this we can use  "useMemo" : 
 useMemo will take (callback function and dependancy array[])
It returns a memoized value that is only recalculated if one of the dependencies has changed.
 The memoized value is only recalculated if one of the dependencies changes. Always include all dependencies that the memoized function relies on.

when we use any complex calculation we use useMemo to memorise thing

Usage
Skipping expensive recalculations
Skipping re-rendering of components
Memoizing a dependency of another Hook
Memoizing a function

1.example : React\Project\interview-component\src\components\CB-hook\ExpensiveCom.jsx
2nd  example : 
 ```javascript
 import {useMemo} form 'react'
 
const totalEntries = useMemo(() => heavyOperationFunction(largeJsonFile), [dependencies])
 ```

3. useCallback is a React Hook that lets you cache a function definition between re-renders.
It will return you the function copy

when you calling your functions through useCallback hook, now that function get memoized callback functions cached and passed as props to the children components.

Memoizes a function so that it retains the same reference between renders unless its dependencies change. This prevents the function from being re-created unnecessarily.

when your child component receive any function props from parent component, so when we use useCallback, ensuring that the function reference does not change on every render of the Parent component.
   /* The handleClick function is memoized using useCallback, ensuring that the function reference does not change on every render of the Parent component. */
    /* The Child component only re-renders if the reference to handleClick changes. */

Ref Article: https://semaphoreci.com/blog/react-usecallback-hook

eg of code: React\Project\interview-component\src\components\CB-hook\CBChild.jsx

Summary (IMP)
 <p>handleClick is memoized using useCallback, ensuring the function reference does not change.</p>
<p>The expensive computation is memoized using useMemo, ensuring it only recalculates when number changes.</p>
<p>The Child component is wrapped with React.memo, preventing unnecessary re-renders.</p>

Advantage of useCallback function is when you are passing some functionality through props in your child component at that time it would be avoid re-rendering of that component, but whenever the parent component re-render it will also re-render the child component.

So if you are passing some function, if it any props in child component, what happend is every time it will be , whenever the parent compoenent re-render the function also will be re-defined everything, so child component will think that this will be new props, so it might consider that the props now change, so i have to re-render, so to avoid that we cache the function in the parent compoentn, so that the child component won't be re-render every test 

# When to use the useCallback hook

1. When you need to pass a function as props to a child component.
2. If you have a function that is expensive to compute and you need to call it in multiple places.
3. When dealing with functional components.
4. When you are working with a function that relies on external data or state.

eg. When to Use useCallback Without React.memo

You need to pass a stable function reference to a non-memoized component or to a hook like useEffect or useMemo.

When you work with event listeners use useCallback
when you add event listner you have to clean them up.
```javascript
const handleOnWindload = useCallback(() => {
  console.log("Loaded")
}, []);

//whenyou use use Callback you have to clean up function
useEffect(() => {
  //when you add
  window.addEventListener("load", handleOnWindload); //addEventListener

  return() => { //unMount
    window.removeEventListener("load", handleOnWindload);  //removeEventListener
  }
}, [handleOnWindload]);

# difference between the hooks useCallback and useMemo

The major difference between the hooks is that the useCallback returns a memoized function while the useMemo returns a memoized value. 

It means that useMemo can help prevent unnecessary computations as it caches the computed value of the function and useCallback can help prevent unnecessary re-renders as it returns the memoized function that can be passed as props to the children’s components.


4. React.memo(): Minimizing re-renders with React.memo(); It's a build in method not hooks.
React.memo is higer order component that memoizes the result of components rendering;
It skips the unnecesary re-renders if component props remain the same (IMP)

Component only re-render if its props change. this will help to optimise performance our 
When you wrap a component with React.memo, React memoizes the result.

 If the props of the component do not change, React uses the memoized result and skips rendering the component

 # Problem with React.memo
 if we passed props as functions to the children components, React.memo does not prevent re-rendering in the children components.
 
 Recall that the functions before and after component rendering are not the same. Here, React.memo noticed that the props which are functions coming from the Parent component have changed, so it doesn’t stop the components from re-rendering.

The big question is how to let React know that the props have not changed so re-rendering is not triggered.

The solution to that is the useCallback hook which will fully memoize our application.

when you calling your functions through useCallback hook, now that function get memoized callback functions cached and passed as props to the children components.

5.Debouncing:
Debouncing is a technique used to delay the execution of a function until after a certain amount of time has passed since last invocation

It is commanly used for hadaling expensive operations triggered by user events, such as input evetns and search requests.

eg: lets exaple of serach input field. when a user types in the serach box, an event is trigger for every keystroke.
Without debouncing, this call lead to expensive API calls or unnecessary processing
By debouncing the event handler, we can ensure that the search function is called only after the use has finished or paused for speicifed duration

eg: https://www.freecodecamp.org/news/debouncing-explained/
Api Try: https://api.postalpincode.in/pincode/421503

6. CDN : Content Delivery Nextwork
![alt text](image-cdn.png)
Its service that accelerates internet content delivery: CDN makes your website faster
Increase Speed
Reduction Load
Ref link: https://www.youtube.com/watch?v=Bsq5cKkS33I

7. SSR : SErver Side Rendering
![alt text](image-SSR.png)

8. useEffect cleanup function helps developers clean effects that prevent unwanted behaviors, thereby optimizing application performance.
```

# useEffect Hook 
A side effect can be fetching data from a remote server, reading or writing to local storage, setting up event listeners, or setting up a subscription. These side effects can occur when a button is clicked, a form is submitted, or when a component is mounted and unmounted.

React’s useEffecthook allows functional components to do things when a component is mounted or when some properties or states change. This hook also allows cleaning up when the component is unmounted.

dependency Array:
if there is no dependancies: entire component render every time
if the is [] dependancies...whole component mount (for 1 time at initial level) yaa fir
unmount : the useEffect which have empty dependency array, then the useEffect (its call back function) will run only when component mount ...render initially level when component mount

if there is [dependancy] array involve: then useEffect with [dependancies] will render at initial render when component mount and we also re-run when dependencies array change or update, at that time compoenent re-render 

Understand this when component unmount it means the entire comp remove from the UI its vanish not avaibale on UI, at that time the useEffect return function will work...this is your clean up function
but when the compnent again mounts after unmounts at that that the code inside the useEffect return function will not work as return function always return previous value so it will run with the usefffect callback function only

```javascript
useEffect(() => {
    // Your setup code runs when your component is added to the page (mounts).
    console.log('I am Update Count', count); //update value 1

    return () => { 
      //First, your cleanup code runs with the old props and state.
      //Your cleanup code runs one final time after your component is removed from the page (unmounts). */
      console.log('I am UUUUUUUUUUUUUUUUnmount', count); //previous value 0
    }
  },[count]) //render entrie component when count change ...  dependencies have changed:

  //result
/*   I am UUUUUUUUUUUUUUUUnmount 0 (return function in useEffect) //so we get old value
  I am Update Count 1 (callback function in useEffect) */ //the new props and state.


  /* React calls your setup and cleanup functions whenever it’s necessary, which may happen multiple times:

Your setup code runs when your component is added to the page (mounts).
After every re-render of your component where the dependencies have changed:
First, your cleanup code runs with the old props and state.
Then, your setup code runs with the new props and state.
Your cleanup code runs one final time after your component is removed from the page (unmounts). */
```

## What are the side effects?
A side effect can be fetching data from a remote server, reading or writing to local storage, setting up event listeners, or setting up a subscription. These side effects can occur when a button is clicked, a form is submitted, or when a component is mounted and unmounted. 

## example of side Effect
A timer managed with setInterval() and clearInterval().
An event subscription using window.addEventListener() and window.removeEventListener().
A third-party animation library with an API like animation.start() and animation.reset().

# what is Clean Up function in UseEffect?

 useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans itself up using the cleanup function.

# Why is the useEffect cleanup function useful?

useEffect cleanup function helps developers clean effects that prevent unwanted behaviors, thereby optimizing application performance.

eg. fetch requests would continue to run even after the component unmounts or the dependencies change. This can lead to unexpected behavior or errors, such as displaying outdated information or attempting to update components that are no longer mounted.

So, it is necessary for us to abort the fetch using the cleanup function. That way, we prevent these memory leak-related issues in our application.

React performs the cleanup when the component unmounts. However, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.”

eg with useEffect

```javascript
//example 1
useEffect(() => {
  const handleKeyEvent = (event) => {

  }

  window.addEventListener("keyup", handleKeyEvent)

  return () => {
    window.removeEventListener("keyup", handleKeyEvent)
  }
}, []);

//example 2
useEffect(() => {
    let timerId = setTimeout(() => {
      // do something     
      timerId = null;
    }, 3000);
  
  // cleanup the timmer when component unmout
    return () => clearTimeout(timerId);
  }, []);
```

# useState
purpose: It is used to create Local State variable inside functional component


# useContext: 
we useed to avoid props drilling
useContext is used to consume data from react context
IMP:
Context provides a way to share data between components without having to pass props manually at every level of component tree.
It allows to create global state that can be accessed by any compoenent that needs it, regardsless of where it is in the component hierachy

# how to use useContext:
React.createContext():  this method is used to create context, this methods returns an object with two proeprties (Provider and Consumer...consume data by useContext hook)

Provider: we have to wrap the component that should have access to shared data with the Provider. We have to do it highest lever in compoenent tree '<MyCompoenent.Provider value={data}>'

Consume context: useContext 

```javascript
const MyComponent = React.createContext(null); export it
const data ={name: 'kavita'}
<MyCompoenent.Provider value={data}>
  <CompoenentLists />
</MyCompoenent.Provider>

in CompoenentLists
const shareDataContext  = useContext(MyCompoenent);
return (
  {shareDataContext}
)
```

# HOw to create custom Hooks

# what is webpack

At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

How to create Custom hook and example?

how to create HOC with example?

REact Router with lazy loading

Auth Integration? Auth Token

What is the use of Synthetic events

Synthetic events in React are objects that act as cross browser wrappers,  allowing fir the use of native entents