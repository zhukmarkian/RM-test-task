import axios from "axios";

export const getCharacters = () => {
    return axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => response && response.data)
        .catch((error) =>
            error &&
            error.response &&
            error.response.message
                ? {error: error.response.message}
                : {error: 'unknown error'},
        );
}
export const oneCharacter = (id) =>{
    console.log('id',id)
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response && response.data)
        .catch((error) =>
            error &&
            error.response &&
            error.response.message
                ? {error: error.response.message}
                : {error: 'unknown error'},
        );
}

