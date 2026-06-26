"use client";
import { useState } from "react";
import Todofilter from "../compoment/Todofilter";
import TodoList from "../compoment/TodoList";
import TodoAdd from "../compoment/TodoAdd";
import "./page.css"
import { Todo } from "../type";
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");
/**
 * 添加新待办事项的处理函数
 * @param text - 待办事项的文本内容
 */
  const handleAdd = (text: string) => {
  // 创建一个新的待办事项对象
    const newTodo: Todo = { // 使用当前时间戳作为唯一ID
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  const filteredTodos = filter === 'active'
  ? todos.filter(t => !t.completed)
  : filter === 'completed'
    ? todos.filter(t => t.completed)
    : todos
  return (
    <div className="maindiv">
      <h1>TodoList </h1>
      <TodoAdd onAdd={handleAdd}></TodoAdd>
      <TodoList todos={filteredTodos} setTodos={setTodos}/>
      <Todofilter setFilter={setFilter}/>
    </div>
  );
}
