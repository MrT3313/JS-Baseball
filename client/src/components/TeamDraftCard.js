// IMPORTS
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'

// COMPONENTS 
const StyledTeamDraftCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;
    margin: 10px;

    border-radius: 5px;
    border: 1px solid blue;
`;


// COMPONENT TO EXPORT
function TeamDraftCard({team}) {
    return (
        <StyledTeamDraftCard>
            <div>{team.city}</div>
            <div>{team.name}</div>
        </StyledTeamDraftCard>
    )
}
// EXPORTS
export default TeamDraftCard