import React, {useEffect, useRef} from 'react';
import { TextField} from "@material-ui/core";

export default function SearchLocation({searchValue, setSearchValue}) {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    function handleChange(event) {
        setSearchValue(event.target.value)
    }
    return (
        <div>
                <TextField className="test"
                           ref={inputRef}
                           value={searchValue}
                           onChange={handleChange}
                           variant="filled"
                           id="filled-basic" label="Type a name..."/>


        </div>
    );
}

