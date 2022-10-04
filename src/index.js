import './styles.css';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

import { Todo, TodoList } from './classes/index.js';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo )) it's the same as this
todoList.todos.forEach( crearTodoHtml )



// const nuevoTodo = new Todo('Aprender Javascript')
// // todoList.nuevoTodo( nuevoTodo )
// nuevoTodo.imprimirAlgo()
// todoList.todos[2].imprimirAlgo()


console.log('todosList', todoList.todos)
