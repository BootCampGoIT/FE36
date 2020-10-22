import React from 'react';
import css from './ListItem.module.css';

const ListItem = ({ task, deleteTask }) => {
    return (
        <li className={css.listItem}>
            <span><b>TaskName:</b> {task.taskName}</span>
            <span><b>TaskValue:</b> {task.taskValue}</span>
            <button id={task.id} onClick={deleteTask}>Delete</button>
        </li>
    );
}

export default ListItem;