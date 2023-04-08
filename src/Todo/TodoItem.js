import React from "react";
import PropTypes from "prop-types";

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
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input}/>
                <strong>{props.index + 1}</strong>
                &nbsp;
                {props.task.title}
            </span>
            <button style={styles.button}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default TodoItem