import React from "react"
import {Link} from "react-router-dom";
import styled from 'styled-components';

const CharCard = ({chars}) => {

    return <Container>
        {chars.map((char) => <div key={char.id} className='charCard'>
            <Link className="btn-war" to={`/chars/${char.id}`} key={char.id} role="button">
                <img src={char.image} alt="profile picture"/>
            </Link>
               <Name> <h3>{char.name}</h3></Name>
            </div>
        )}
   </Container>
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
`
const Name =styled.h3`
  max-width: 300px;
  color: rgb(26, 26, 26);
`

export default CharCard;
