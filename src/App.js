import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles";
import { Box, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { AddTodo } from "./store/todoSlice";

const App = () => {
  const [text, setText] = useState(" ");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(AddTodo({ text }));
    setText(" ");
  };

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
          <InputField
            text={text}
            handleInput={setText}
            handleSubmit={addTask}
          />
          <TodoList />
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
