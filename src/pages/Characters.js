import React, {useState, useEffect} from "react";
import PaginationChar from "../components/pagination/PaginationChar"
import CharCard from "../components/CharCards/CharCard";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {getCharacters} from "../api/characters";


export default function Characters() {
    const [status, setStatus] = useState(["all"]);
    const [gender, setGender] = useState('all')
    const [species, setSpecies] = useState(["all"]);
    const [filteredSpecies, setFilterSpecies] = useState([])
    const [chars, setChars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charPerPage] = useState(10);

    useEffect(() => {
        filterHandler();
        // eslint-disable-next-line
    }, [chars, species,]);
    useEffect(() => {
        filterStatuses()
        // eslint-disable-next-line
    }, [chars, status]);
    useEffect(() => {
        filterGenders()
        // eslint-disable-next-line
    }, [chars, gender]);

    useEffect(async () => {
        const response = await getCharacters();
        if (response) {
            await setChars(response?.results)
        }
    }, []);

    const filterHandler = () => {
        switch (species) {
            case "Human":
                setFilterSpecies(chars.filter(char => char.species === "Human"))
                break;
            case 'Creature':
                setFilterSpecies(chars.filter(char => char.species === "Alien"))
                break;
            default:
                setFilterSpecies(chars);
                break;
        }
    }
    const filterStatuses = () => {
        switch (status) {
            case "Alive":
                setFilterSpecies(chars.filter(char => char.status === "Alive"))
                break;
            case 'Dead':
                setFilterSpecies(chars.filter(char => char.status === "Dead"))
                break;
            case 'unknown':
                setFilterSpecies(chars.filter(char => char.status === "unknown"))
                break;
            default:
                setFilterSpecies(chars);
                break;
        }
    }
    const filterGenders = () => {
        switch (gender) {
            case "Male":
                setFilterSpecies(chars.filter(char => char.gender === "Male"))
                break;
            case 'Female':
                setFilterSpecies(chars.filter(char => char.gender === "Female"))
                break;
            case 'unknown':
                setFilterSpecies(chars.filter(char => char.gender === "unknown"))
                break;

            default:
                setFilterSpecies(chars);
                break;
        }
    }

    const indexOfLastPage = currentPage * charPerPage;
    const indexOfFirstPage = indexOfLastPage - charPerPage;
    const currentChar = filteredSpecies.slice(indexOfFirstPage, indexOfLastPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const speciesHandler = (e) => {
        setSpecies(e.target.value)
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    const genderHandler = (e) => {
        setGender(e.target.value)
    }


    return (
        <div>
            <div className="Forms">
                <FormControl className="Form">
                    <InputLabel id="demo-simple-select-label">Species</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={speciesHandler}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'Human'}>Human</MenuItem>
                        <MenuItem value={'Creature'}>Creature</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="Form">
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={statusHandler}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'Alive'}>Alive</MenuItem>
                        <MenuItem value={'Dead'}>Dead</MenuItem>
                        <MenuItem value={'unknown'}>Unknown</MenuItem>
                    </Select>
                </FormControl>


                <FormControl className="Form">
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={genderHandler}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='allCharacters1'>
                <br/>
                <CharCard key={chars.id} chars={currentChar} filteredSpecies={filteredSpecies}/>
                <PaginationChar charPerPage={charPerPage} totalChars={filteredSpecies.length} paginate={paginate}/>
            </div>
        </div>
    )

}
