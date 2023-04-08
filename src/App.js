import React from "react";
import TodoList from "./Todo/TodoList";

const todoList = [
    {id: 1, completed: false, title: "Купить пылесос"},
    {id: 2, completed: false, title: "Купить молоко"},
    {id: 3, completed: false, title: "Вытереть пыль"},
    {id: 4, completed: false, title: "Продать гараж"},
]

function App() {
    return (
        <div className="wrapper">
            <h1>Hello Mykola</h1>
            <TodoList tasks={todoList}/>
        </div>);
}

export default App;
