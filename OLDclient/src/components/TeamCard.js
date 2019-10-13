// - IMPORTS - //
import React, {useEffect} from 'react'
import styled from 'styled-components'
import Button from './Button.js'

// - STYLED COMPONENTS - //
const StyledTeamCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin: 0
    }
    padding: 10px;

    border-radius: 10px;
    border: 1px solid pink;
`;

// - COMPONENT TO EXPORT - //
function TeamCard(params) {
    const {team, id, draft} = params
    console.log('<TeamCard />',params)
    // console.log(team)
    // console.log(id)
    // console.log(draft)
    // -- * -- //
    return(
        <StyledTeamCard className="teamCard">
            <p>{team.city}</p>
            <p>{team.name}</p>
            <Button 
                buttonFunction={draft}
                buttonText={`Draft the ${team.name}`}
                id={id}
            /> 
        </StyledTeamCard>
    )
}

// - EXPORTS - //
export default TeamCard