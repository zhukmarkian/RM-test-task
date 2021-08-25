import React, {useState, useEffect} from "react";
import LocationCard from "../components/LocationCard/LocationCard";
import PaginationLocation from "../components/pagination/PaginationLocation";
import {getLocations} from "../api/locations";


export default function Locations() {
    const [location, setLocation] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [locationPerPage] = useState(10);


    useEffect(async() => {
        const response = await getLocations();
        if(response){
            await setLocation(response?.results)
        }
    }, []);


    const indexOfLastPage = currentPage * locationPerPage;
    const indexOfFirstPage = indexOfLastPage - locationPerPage;
    const currentLocation = location.slice(indexOfFirstPage, indexOfLastPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <table>

            <LocationCard key={location.id} location={currentLocation} />
            <PaginationLocation locationPerPage={locationPerPage} totalLocation={location.length} paginate={paginate}/>
        </table>
    )
}
