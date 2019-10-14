// IMPORTS
    import React from 'react'
    import styled from 'styled-components'

// IMPORT ACTION CREATORS

// COMPONENTS

// STYLED COMPONENTS
const StyledTeamContainer = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 5px;
    border: 1px solid purple;
`;
const Title = styled.h5`
    display: flex;

    justify-content: center;
    align-items: center;

    margin: 10px;
`;
const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// COMPONENT TO EXPORT
function TeamContainer(props) {
    console.log('<TeamContainer /> props',props)
    // -- //
    return(
        <StyledTeamContainer>
            {props.team.homeTeam ? <Title>Home Team</Title> : <Title>Away Team</Title>}
            
            <Data className='city'>{props.team.city}</Data>
            <Data className='name'>{props.team.name}</Data>
            
        </StyledTeamContainer>
    )
}
// EXPORTS
export default TeamContainer