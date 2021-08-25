import React from "react"
import styled from "styled-components";

const PaginationChar = ({charPerPage, totalChars, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalChars / charPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <BoxNum>
                {pageNumbers.map(number => (
                    <Num key={number}>
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
`
const Num = styled.li`
  color: #0d1514;
  justify-content: center;
  align-items: center;
  margin: 5px;
`
const L = styled.a`
  background: #535a5a;
  padding: 7px;
  border-radius: 5px;
  border: #343a40;

`
export default PaginationChar;
