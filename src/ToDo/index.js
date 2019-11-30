import React from "react";
import WithMiddleware from "./WithMiddleware";
import WithActions from "./WithActions";

const isMiddleware = process.env.REACT_APP_WITH_MIDDLEWARE;

export default function ToDo() {
  console.log("With Middleware", isMiddleware);
  return (
    <div className="todo-app">
      {isMiddleware !== "0" ? <WithMiddleware/> : <WithActions />}
    </div>
  );
}
