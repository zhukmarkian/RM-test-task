import React from "react"
import styled from 'styled-components';

const PaginationEpisode = ({episodePerPage, totalEpisode, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalEpisode / episodePerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <BoxNum>
                {pageNumbers.map(number => (
                    <Num key={number} className='page-item'>
                        <L onClick={() => paginate(number)}>{number}</L>
                    </Num>
                ))}
            </BoxNum>
        </nav>
    )

};
const BoxNum = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .25rem;
  justify-content: center;
  background: #343a40;
`
const Num = styled.li`
  color: #0d1514;
  background-color: #535a5a;
  justify-content: center;
  align-items: center;
  margin: 5px;
`
const L = styled.a`
  background: #535a5a;
  padding: 7px;
  border-radius: 5px;
`
export default PaginationEpisode;
