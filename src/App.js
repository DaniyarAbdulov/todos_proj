import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles";
import { Box, CircularProgress, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, fetchTodos } from "./store/todoSlice";

const App = () => {
  const [text, setText] = useState(" ");
  const {status, error} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(AddTodo({ text }));
    setText(" ");
  };

    useEffect(() => {
      dispatch(fetchTodos());
    }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ alignItems: "center", margin: 10 }}>
        <Header />
        <Box
          sx={{
            boxShadow: 1,
            p: 4,
            minWidth: 300,
            backgroundColor: "whitesmoke",
          }}
        >
          <div style={{display:'flex', justifyContent:'center'}}>
          <InputField
            text={text}
            handleInput={setText}
            handleSubmit={addTask}
          />
          </div>
          {status === 'loading' && <h2><CircularProgress/></h2>}
          {error && <h2>an Error:{error}</h2>}
          
          <TodoList />
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
