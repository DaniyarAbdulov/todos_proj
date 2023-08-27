import React from 'react'
import { ListItem, Checkbox, ListItemButton, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from '../store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Checkbox
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
      />
      <ListItemText primary={text}></ListItemText>
      <ListItemButton onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </ListItemButton>
    </ListItem>
  )
}

export default TodoItem 