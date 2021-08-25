import React from "react";
import styled from 'styled-components';
import {useLocation} from "react-router";
import {Link} from 'react-router-dom'



export const Navigation = () =>{
    const location = useLocation()


     return   <Container>

           <Chars >
                        <Box href="/" active={location.pathname === 'http://localhost:3000/characters'}>
                            Characters
                        </Box>
           </Chars>
         <Episode>
                        <Box href="/episodes" active={location.pathname === 'http://localhost:3000/characters'}>
                            Episodes
                        </Box>
         </Episode>
            <RM>RICK & MORTY</RM>
                <Location>

                        <Box active={location.pathname === 'http://localhost:3000/characters'}
                            href="/locations"
                        >Locations
                        </Box>
            </Location>

                <WatchList>
                        <Box active={location.pathname === 'http://localhost:3000/characters'}
                            href="/watch-list"
                        >Watch list
                        </Box>
        </WatchList>
        </Container>
}

const RM=styled.div`
  font-size: 27px;
    font-weight: bold;
`
const Chars=styled.div`
  font-weight: bold;
  text-decoration: none;
  margin-left: 12%;
  margin-top: 12px;
`
const Location=styled.div`
  font-weight: bold;
  margin-top: 12px
`
const Episode= styled.div`
  font-weight: bold;
  margin-top: 12px;
`
const WatchList=styled.div`
  font-weight: bold;
  margin-top: 12px;
  margin-right: 12%;
`
const Container=styled.div`
display: flex;
justify-content: space-between;
padding: 15px;
  text-decoration-line: none;
  background: #343a40;
  
`
const Box = styled.a`
  color: ${props => props.active ? 'black' : 'white'};
text-decoration: blink;

`
