import React, {useState, useEffect} from "react";
import EpisodeCard from "../components/EpisodeCard/EpisodeCard";
import PaginationEpisode from "../components/pagination/PaginationEpisode";
import {getEpisodes} from "../api/episodes";
import styled from 'styled-components';

export default function Episodes() {
    const [episode, setEpisode] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [episodePerPage] = useState(10);

    useEffect(async () => {
        const response = await getEpisodes();
        if (response) {
            await setEpisode(response?.results)
        }
    }, []);

    const indexOfLastPage = currentPage * episodePerPage;
    const indexOfFirstPage = indexOfLastPage - episodePerPage;
    const currentEpisode = episode.slice(indexOfFirstPage, indexOfLastPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <Row>

            <EpisodeCard key={episode.id} episode={currentEpisode}/>
            <PaginationEpisode episodePerPage={episodePerPage} totalEpisode={episode.length} paginate={paginate}/>
        </Row>
    )
}
const Row = styled.table`
  color: black`
