import React from 'react';
import '../ComponentStyles.css'
import {Watch} from "./Watch";

export const WatchList = ({todos, setTodos, filteredTodos}) => {

    return (
        <div className="watch-container">
            <ul className="watch-list">
                {filteredTodos.map((todo) => (
                    <Watch setTodos={setTodos}
                           todos={todos} key={todo.id}
                           text={todo.text}
                           todo={todo}
                           id={todo.id}/>
                ))}
            </ul>

        </div>
    );
}


