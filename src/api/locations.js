import axios from "axios";

export const getLocations = () => {
    return axios.get("https://rickandmortyapi.com/api/location")
        .then((response) => response && response.data)
        .catch((error) =>
            error &&
            error.response &&
            error.response.message
                ? {error: error.response.message}
                : {error: 'unknown error'},
        );
}

