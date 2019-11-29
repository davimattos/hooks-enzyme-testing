import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
