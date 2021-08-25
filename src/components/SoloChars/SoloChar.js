import React, {useState, useEffect} from "react";
import {oneCharacter} from "../../api/characters";
import styled from 'styled-components';

export default function SoloChar(props) {
    const [char, setChar] = useState([]);
    useEffect(async () => {
        const response = await oneCharacter(props.match.params.id)
        if (response) {
            await setChar(response)
        }
    }, []);
    return (
        <Container>
            <div>
                <h3>{char?.name}</h3>
                <img src={char?.image}/>
                <p>Status: {char?.status}</p>
                <p>Species: {char?.species}</p>
                <p>Gender:{char?.gender}</p>
                <p>Origin Name:{char?.origin && char?.origin?.name}</p>
            </div>
        </Container>
    );
}
const Container = styled.div`
  color: rgb(26, 26, 26);
  font-size: large;
  font-weight: bold;
  display: flex;
  justify-content: center;
`
