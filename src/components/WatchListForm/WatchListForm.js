import React, {useEffect, useRef} from 'react';
import {FormControl, InputLabel, MenuItem, Select, TextField, withStyles} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const StyledIcon = withStyles((theme) => ({
    root: {
        color: 'black',
        marginTop: "20px",
    }
}))(AddCircleOutlineIcon);
const StyledField = withStyles((theme) => ({
    root: {
        width: 400
    }
}))(TextField);
const StyledSelect = withStyles((theme) => ({
    root: {
        width: 200
    }
}))(Select);

export default function WatchListForm({setInputText, inputText, setTodos, todos, setStatus}) {

    const inputTextHandler = (e) => {

        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText('')
    }
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>

            <form>

                <form noValidate autoComplete="off">
                    <StyledField className="test"
                                 ref={inputRef}
                                 value={inputText}
                                 onChange={inputTextHandler}
                                 variant="filled"
                                 label="Write episode..."/>
                    <StyledIcon onClick={submitTodoHandler} type="submit">
                        <AddCircleOutlineIcon/>
                    </StyledIcon>
                </form>

                <div className="select">
                    <FormControl>
                        <InputLabel>Choose</InputLabel>
                        <StyledSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={statusHandler}
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value='completed'>Completed</MenuItem>
                            <MenuItem value='uncompleted'>Uncompleted</MenuItem>
                        </StyledSelect>
                    </FormControl>

                </div>
            </form>
        </div>
    );

}


