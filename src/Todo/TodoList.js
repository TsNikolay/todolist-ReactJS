import React from "react";
import PropTypes from "prop-types";
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: "none",
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.tasks.map((todo, idx) => {
                return <TodoItem task={todo} key={todo.id} index={idx}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList