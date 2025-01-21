import "./App.css";
import { useState, useRef } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 강의 듣기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Next.js 복습하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "TanStack Query 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "TypeScript 강의 듣기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(4);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
