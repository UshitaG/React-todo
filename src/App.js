import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
const axios = require("axios");

function App() {
  const [text, setText] = useState(" ");
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    console.log("here");
    axios
      .get("http://localhost:5000/todo")
      .then(res => {
        setList(res.data.todos);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    filterTodosHandler();
  }, [list, status]);

  const filterTodosHandler = () => {
    switch (status) {
      case "done":
        setFilteredTodos(list.filter(item => item.completed === true));
        break;
      case "pending":
        setFilteredTodos(list.filter(item => item.completed === false));
        break;
      default:
        setFilteredTodos(list);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Input
        setText={setText}
        text={text}
        list={list}
        setList={setList}
        setStatus={setStatus}
      />
      <List list={filteredTodos} setList={setList} setText={setText} />
    </div>
  );
}

export default App;
