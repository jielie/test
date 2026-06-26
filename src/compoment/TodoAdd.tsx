"use client";
import React, { useState } from "react";
interface TodoAddProps {
    onAdd: (value: string) => void;
}
function TodoAdd({onAdd}: TodoAddProps) {
    const [value, setValue] = useState("");

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      return;
    }
    onAdd(value);
    console.log(value);
    setValue("");
  }
    return (
        <form className="todo-add" onSubmit={onSubmit}>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
            <button type="submit">添加</button>
        </form>
    )
}
export default TodoAdd;