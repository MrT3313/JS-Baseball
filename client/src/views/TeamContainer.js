// IMPORTS
    import React from 'react'
    import styled from 'styled-components'

// IMPORT ACTION CREATORS

// COMPONENTS

// STYLED COMPONENTS
const StyledTeamContainer = styled.div`
    display: flex;

    border-radius: 5px;
    border: 1px solid purple;
`;

const Title = styled.h5`
    display: flex;
    margin: 10px;

`;

// COMPONENT TO EXPORT
function TeamContainer(props) {
    console.log(props)
    // -- //
    return(
        <StyledTeamContainer>
            {props.homeTeam === 'true' && <Title>Home Team</Title>}
            {props.homeTeam === 'false' && <Title>Away Team</Title>}
        </StyledTeamContainer>
    )
}
// EXPORTS
export default TeamContainer