import React from 'react'
import { ListItem, Checkbox, ListItemButton, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from '../store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Checkbox
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
      />
      <ListItemText primary={title}></ListItemText>
      <div>
              <ListItemButton onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </ListItemButton>
      </div>

    </ListItem>
  )
}

export default TodoItem 