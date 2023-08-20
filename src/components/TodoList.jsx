import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, toggleTodoCompleted, removeTodo }) => {
  return (
    <ul>
      {
        todos.map(todo => <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodoCompleted={toggleTodoCompleted} />)
      }
    </ul>
  )
}
