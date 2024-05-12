
import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios
import './App.css'

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`faq-item ${show ? "active" : ""}`} onClick={toggleShow}>
      <div className='faq-item-header'>
        {question}
      </div>
      <div className='faq-item-body'>
        <div className='faq-item-body-content'>{answer}</div>
      </div>
    </div>
  );
};

const FaqAccordion = ({ data }) => {
  return (
    <div className='faq-accordion'>
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const data = [
  { id: 1, question: "What is React?", answer: "React (aka React.js or ReactJS) is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps based on components in a declarative approach." },
  { id: 2, question: "What is the history behind React evolution?", answer: "The history of ReactJS started in 2010 with the creation of XHP. XHP is a PHP extension which improved the syntax of the language such that XML document fragments become valid PHP expressions and the primary purpose was used to create custom and reusable HTML elements" },
  { id: 3, question: "What are the major features of React?", answer: "The major features of React are: Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code It uses Virtual DOM instead of Real DOM considering that Real DOM manipulations are expensive. Supports server-side rendering which is useful for Search Engine Optimizations(SEO). Follows Unidirectional or one-way data flow or data binding. Uses reusable/composable UI components to develop the view." },
  { id: 4, question: "What is JSX?", answer: "JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the React.createElement(type, props, ...children) function, giving us expressiveness of JavaScript along with HTML like template syntax." }
,{id:5,question:" What are the differences between functional and class components?", answer:"Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on a feature basis. After the introduction of Hooks, functional components are equivalent to class components.Although functional components are the new trend, the react team insists on keeping class components in React. Therefore, it is important to know how these components differ."},
{id:6,question:"What is the virtual DOM? How does react use the virtual DOM to render the UI?",answer:"As stated by the react team, virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM."}
,{id:7,question:"What is React Hooks?", answer:"React Hooks are the built-in functions that permit developers for using the state and lifecycle methods within React components. These are newly added features made available in React 16.8 version. Each lifecycle of a component is having 3 phases which include mount, unmount, and update. Along with that, components have properties and states. Hooks will allow using these methods by developers for improving the reuse of code with higher flexibility navigating the component tree."},
{id:8,question:"What is the use of useEffect React Hooks?",answer:"The useEffect React Hook is used for performing the side effects in functional components. With the help of useEffect, you will inform React that your component requires something to be done after rendering the component or after a state change. The function you have passed(can be referred to as “effect”) will be remembered by React and call afterwards the performance of DOM updates is over. Using this, we can perform various calculations such as data fetching, setting up document title, manipulating DOM directly, etc, that don’t target the output value. The useEffect hook will run by default after the first render and also after each update of the component. React will guarantee that the DOM will be updated by the time when the effect has run by it."
},
{id:9,question:"What are Custom Hooks?",answer:"A Custom Hook is a function in Javascript whose name begins with ‘use’ and which calls other hooks. It is a part of React v16.8 hook update and permits you for reusing the stateful logic without any need for component hierarchy restructuringIn almost all of the cases, custom hooks are considered to be sufficient for replacing render props and HoCs (Higher-Order components) and reducing the amount of nesting required. Custom Hooks will allow you for avoiding multiple layers of abstraction or wrapper hell that might come along with Render Props and HoCs."}
];

function App() {
  return (
    <>
      <div className='faq-accordion'>
        <FaqAccordion data={data} />
      </div>
    </>
  );
}

export default App;
