import { Question } from '../models/question';

export const predefinedQuestions: Question[] = [
  {
    type: 'MCQ',
    question:
      'Which of the following is not a primitive data type in JavaScript?',
    options: ['String', 'Number', 'Object', 'Boolean'],
    answer: 'Object'
  },
  {
    type: 'MCQ',
    question:
      'Which of the following keywords is used to declare a block-scoped variable?',
    options: ['var', 'let', 'const', 'both let and const'],
    answer: 'both let and const'
  },
  {
    type: 'MCQ',
    question:
      'What is the default return value of functions in JavaScript that do not return anything explicitly?',
    options: ['0', 'null', 'undefined', 'void'],
    answer: 'undefined'
  },
  {
    type: 'MCQ',
    question: 'What is a closure in JavaScript?',
    options: [
      'A function having access to its own scope only',
      'A function having access to the variables in the global scope',
      'A function having access to the variables of its own scope, the global scope, and the outer function’s scope',
      'A function having no access to any scope'
    ],
    answer:
      'A function having access to the variables of its own scope, the global scope, and the outer function’s scope'
  },
  {
    type: 'Descriptive',
    question:
      'Explain the concept of `this` in JavaScript and how its value is determined.',
    answer:
      'In JavaScript, `this` refers to the context in which a function is called. It can vary based on how the function is invoked. In a method, `this` refers to the object it belongs to; in a function, it refers to the global object (or undefined in strict mode). In an arrow function, `this` retains the value from its lexical scope.'
  },
  {
    type: 'Descriptive',
    question:
      'What are Promises in JavaScript, and how do they work in asynchronous programming?',
    answer:
      'Promises are objects representing the eventual completion or failure of an asynchronous operation. They allow you to handle asynchronous results in a cleaner way, using `.then()`, `.catch()`, and `.finally()` methods. A Promise can be in one of three states: pending, fulfilled, or rejected.'
  },
  {
    type: 'MCQ',
    question: 'Which of the following statements about hoisting is true?',
    options: [
      'Functions and variables are hoisted to the bottom of the scope',
      'Only variables are hoisted',
      'Functions are hoisted, but variables are not',
      'Functions and variables are hoisted to the top of their scope'
    ],
    answer: 'Functions and variables are hoisted to the top of their scope'
  },
  {
    type: 'MCQ',
    question: 'What does the JavaScript event loop do?',
    options: [
      'Executes all functions in order of declaration',
      'Handles asynchronous callbacks by managing the call stack and the task queue',
      'Manages the execution of synchronous code only',
      'None of the above'
    ],
    answer:
      'Handles asynchronous callbacks by managing the call stack and the task queue'
  },
  {
    type: 'Descriptive',
    question: 'Describe prototypal inheritance in JavaScript and how it works.',
    answer:
      'Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. Each object has a prototype, and it can access properties and methods defined on its prototype chain. This is typically done using `Object.create()` or by setting `__proto__` to another object.'
  },
  {
    type: 'Descriptive',
    question:
      'What is the difference between `map()` and `forEach()` in JavaScript?',
    answer:
      'Both `map()` and `forEach()` are array methods in JavaScript. `forEach()` iterates over each element of an array and executes a callback, but it does not return anything. `map()` also iterates over an array and applies a callback, but it returns a new array with the results.'
  },
  {
    type: 'MCQ',
    question:
      'Which array method adds one or more elements to the end of an array and returns the new length of the array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 'push()'
  },
  {
    type: 'MCQ',
    question:
      'Which method is used to attach an event handler to an element in JavaScript?',
    options: ['attachEvent()', 'addEventListener()', 'addEvent()', 'onEvent()'],
    answer: 'addEventListener()'
  },
  {
    type: 'MCQ',
    question:
      'What is the return value of the `forEach()` method in JavaScript?',
    options: [
      'A new array',
      'The original array',
      'undefined',
      'The length of the array'
    ],
    answer: 'undefined'
  },
  {
    type: 'Descriptive',
    question:
      'Describe the states of a JavaScript Promise and their significance.',
    answer:
      'A Promise can be in one of three states: pending, fulfilled, or rejected. "Pending" means the promise is still executing and hasn’t settled yet. "Fulfilled" indicates that the operation was successful, and "rejected" indicates that the operation failed.'
  },
  {
    type: 'MCQ',
    question:
      'Which of the following statements is true about arrow functions?',
    options: [
      'They bind their own `this` value.',
      'They inherit `this` from the enclosing lexical context.',
      'They have their own `this` value by default.',
      'They cannot accept parameters.'
    ],
    answer: 'They inherit `this` from the enclosing lexical context.'
  },
  {
    type: 'Descriptive',
    question:
      'Explain the concept of prototypes in JavaScript and how they are used.',
    answer:
      'In JavaScript, each object has a prototype, which is another object it inherits properties from. This forms a prototype chain. Prototypes are used to add methods and properties to objects created by constructor functions, providing shared behavior across instances.'
  },
  {
    type: 'MCQ',
    question: 'What does the `await` keyword do in an `async` function?',
    options: [
      'It pauses the execution of the function until the promise is settled.',
      'It makes the function synchronous.',
      'It immediately rejects the promise.',
      'It returns the promise without waiting.'
    ],
    answer:
      'It pauses the execution of the function until the promise is settled.'
  },
  {
    type: 'MCQ',
    question: 'What is the purpose of the `setTimeout` function in JavaScript?',
    options: [
      'To execute a function after a delay.',
      'To immediately execute a function.',
      'To cancel an ongoing asynchronous task.',
      'To make an HTTP request after a delay.'
    ],
    answer: 'To execute a function after a delay.'
  },
  {
    type: 'Descriptive',
    question:
      'What are the differences between `call()`, `apply()`, and `bind()` methods in JavaScript?',
    answer:
      '`call()` and `apply()` are used to invoke a function with a specified `this` context, but `apply()` accepts arguments as an array, while `call()` takes arguments individually. `bind()` creates a new function that, when called, has its `this` keyword set to the provided value, allowing for later execution.'
  },
  {
    type: 'MCQ',
    question: 'Which of the following does the `reduce()` method return?',
    options: [
      'An array',
      'A single value',
      'undefined',
      'The length of the array'
    ],
    answer: 'A single value'
  }
];
