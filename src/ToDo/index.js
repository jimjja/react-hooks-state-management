import React from "react";
import WithMiddleware from './WithMiddleware'

export default function ToDo() {
  console.log("TEST ENV", process.env.TEST)
  return (
    <div className="todo-app">
      <WithMiddleware/>
    </div>
  );
}
