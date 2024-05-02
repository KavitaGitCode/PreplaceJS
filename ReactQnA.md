# Why do we need React and React DOM?
React is used to create component whereas the ReactDom is used to convert that component into actual DOM, Node elements so browser will able to understand the code of React.
React DOM helps to build : WEB UI
React Native helps to craft : Mobile APP

# What is the difference between class component and function component?
# What is stateless and stateful component?

Function component is defiend by function where as class component is defiend by class keyword.
initially function component don’t have state management and lifecycle method that’s ,
before react introduce hooks...there is a concept of stateless and statefull component
we called class component to Statefull component as they manage their own state, they have lifecycle methods (like componentDidMount, componentDidUpdate, etc.).
use case: A classic example is a form input
 With the introduction of Hooks in React 16.8, functional components have become more powerful, allowing them to use state, use effect, useref and other React features without being class-based.
 TO manage and maintain easily as compare to class component.
 use case: button or a display label. These components receive all the data they need via props and render accordingly.

 With the advent of Hooks, the line between stateful and stateless components has blurred.
This distinction not only helps in organizing the codebase but also in optimizing the performance and maintainability of React applications.

# What is Virtual DOM? What is the difference between DOM and Virtual DOM? Why do we need Virtual DOM
# What Is Reconciliation Diff Algorithm, React Fiber? How the virtual Dom is faster?

 It it momoery representation of actual DOM. Which helps to improve perforamance and changes of actual DOM by reduing number of expensive DOM Manipulation.

 DOM (document object model) that represents web page like tree structure Dom, which allow JS to dynamically added, update, manipulate node in the structure of web page.
Basically in the plain JS if we add or change some thing on the page, the whole layout will be re-render which will refresh the entire DOM, that’s why react brings the concept of virtual Dom, in that react behind the scene react create exact copy of real dom. And if you make changes in it, react  uses( React Fiber is a Reconciliation Diff Algorithm) will keep track between the  previous and current version of DOM, whatever update will reflect on Actual Dom on Browser. that why react is faster because its avoid refreezing entire page which improves performance.

# What is JSX? Why Dd we need JSX?
React create components. 
Component -> internally react create component instance state -> it generate element -> then it generate Plain Object…which contains type, key, ref, prop, key children, symbol…but this is not maintainable and expressive, its very difficult to parse that’s why JSX exist
This process generate TREE of elements, This knows as virtual Dom….this is core guide principle.
C, CIS, E, PO, it contains t, k,r, p, c, s…this is difficult to parse that why JSX exist.

# What is Pure Component?

A type of component, that only re-renders when its props or state change.  They are also referred to as “stateless components” or “dumb components”. Pure componnent is way to optimise the performance of react application by reducing unnecessary re-renders.

```javascript
import React from 'react';

const PureComponent = ({ name }) => {
  return <div>Hello, {name}! This is a pure component.</div>;
};

export default PureComponent;

```
In React, you can utilize Memo components to enhance your application’s performance. Memo components, a specific type of pure component, operate similarly to functional components but incorporate an additional optimization layer.

A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components. To create a pure class component, one can extend the PureComponent class instead of the standard Component class. 

```python
class Title extends React.PureComponent {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
```

# lifecycles of class component?

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

# What are the HOC in react?

Higher Order Component, is a function that take component as an argument return new component with updated values. It’s technique that allows you to use to re-use logic, across multiple component. If one component pass component as an argument and returns new component with updated values. Take component as an input and return component with updated component.

# What is useState and useEffect hooks in functional component?

useState : we use this hook to store our data in local state variable like private in component.
Whenever state change component re-render again.

useEffect: it means that we want to register side effect, what i ment by this , load the data inside useeffect wala after the component, has been painted onto th screen.
eg: fetching, subscribe, timer, subscription

it has 2 argumets 1 is callback function, 2nd dependanct arreay
1. without array: useEffect will run every render
2. with []: it will runs only when compoent mount (initial render), as we didn't mention any dependancies in it.
3. with [dependancyArra1, dependancyArray2]...runs only when compoent mount (initial render) and whenver the state variable change the depency array change it will re-render




