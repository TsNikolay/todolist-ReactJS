import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".5rem 1rem",
        border: "1px solid gray",
        borderRadius: "4px",
        marginBottom: ".5rem"
    },
    input: {
        marginRight: "1rem"
    },
    button: {
        background: "rgb(0,191,255)",
        color: "white",
        border: "none",
        borderRadius: "100px"
    }
}

function TodoItem(props) {
    const {removeTodo} = useContext(Context);
    const classes = [];
    if (props.task.completed) {
        classes.push('done')
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                       style={styles.input}
                       onChange={() => props.onChange(props.task.id)}
                       checked={props.task.completed}/>
                <strong>{props.index + 1}</strong>
                &nbsp;
                {props.task.title}
            </span>
            <button style={styles.button} onClick={()=> removeTodo(props.task.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem