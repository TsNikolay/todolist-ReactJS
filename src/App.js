import React from "react";
import TodoList from "./Todo/TodoList";


function App() {
    const [todoList, setTodos] = React.useState([
        {id: 1, completed: false, title: "Купить пылесос"},
        {id: 2, completed: false, title: "Купить молоко"},
        {id: 3, completed: false, title: "Вытереть пыль"},
        {id: 4, completed: false, title: "Продать гараж"},
    ])
    function switchTodo(id){
        setTodos(todoList.map( todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo
            })
        )
    }
    return (
        <div className="wrapper">
            <h1>Hello Mykola</h1>
            <TodoList tasks={todoList} onSwitch={switchTodo}/>
        </div>);
}

export default App;
