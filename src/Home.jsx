import { useState } from "react";

import { Button, Container, List, Paper, TextField } from "@mui/material";
import TodoItem from "./components/TodoItem";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

function Home() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  // Função seta a task no localStorage é no state (todos)
  const addTodo = async (text) => {
    let todoList = JSON.parse(localStorage.getItem("todos") || "[]");

    if (text === null) {
      return toast.error("Insira algo para poder adicionar uma tarefa", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    todoList.push({
      name: text,
      id: id,
    });
    setId(id + 1);
    localStorage.setItem("todos", JSON.stringify(todoList));
    setTodos(todoList);
    document.getElementById("outlined-basic").value = null;
    setText(null);
  };

  // Função que remove uma task do state (todos) e depois seta novamente no localStorage
  const deleteTodo = async (id) => {
    let myNewTodoList = todos.filter((todo) => todo.id != id);
    setTodos(myNewTodoList);
    localStorage.setItem("todos", JSON.stringify(myNewTodoList));

    toast.success("Tarefa removida", {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "50px" }}>
      <h1
        style={{
          fontWeight: "bold",
          fontFamily: "helvetica",
          color: "#0091ea",
          textAlign: "center",
        }}
      >
        TODO LIST
      </h1>
      <ToastContainer />
      <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Tarefa"
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
          />

          <Button onClick={() => addTodo(text)} size="small">
            ADD
          </Button>
        </div>
      </Paper>
      <List
        sx={{
          width: "100%",

          marginTop: "1em",
          borderRadius: "5px",
        }}
      >
        {todos &&
          todos.map((todo, key) => (
            <div style={{ marginTop: "1em" }} key={key}>
              <TodoItem todo={todo} deleteTodo={deleteTodo} />
            </div>
          ))}
      </List>
    </Container>
  );
}

export default Home;
