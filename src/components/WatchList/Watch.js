import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

export const Watch = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed
                    };
                }
                return item;
            })
        );
    }
    return (
        <div className="watch">
            <li className={`watch-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <DoneIcon/>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <DeleteIcon/>
            </button>
        </div>
    );

}


