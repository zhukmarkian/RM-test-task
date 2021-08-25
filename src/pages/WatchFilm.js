import React, {useEffect, useState} from "react";
import WatchListForm from "../components/WatchListForm/WatchListForm";
import {WatchList} from "../components/WatchList/WatchList";


export const WatchFilm = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([])
    useEffect(() => {
        getLocalTodos();
    }, [])
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
        // eslint-disable-next-line
    }, [todos, status]);
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    };
    return (
        <div>
            <WatchListForm
                inputText={inputText}
                todos={todos}
                setStatus={setStatus}
                setTodos={setTodos}
                setInputText={setInputText}/>
            <WatchList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
        </div>
    )
}
