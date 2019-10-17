// IMPORTS
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'

// IMPORT ACTION CREATORS
import {a_draftTeam} from '../redux/actions/a_draftTeam.js'

// COMPONENTS 

// STYLED COMPONENTS 
const StyledTeamDraftCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;
    margin: 10px;

    border-radius: 5px;
    border: 1px solid blue;
`;

// COMPONENT TO EXPORT
function TeamDraftCard(props) {
console.log('<TeamDraftCard /> props: ', props)
    // - METHODS - //
    const clickHandler = () => {
    console.log(props.team)
    console.log(props.id)
        // -- // 
    const availableUniverse = props.teamUniverse
    let homeTeam = undefined
        // -- // 
        if (props.pickNum % 2 !== 0 ) {
            homeTeam = true
        } else {
            homeTeam = false
        }
        // -- // 
        let selection = availableUniverse.splice(props.id,1)[0]
        // selection.homeTeam = homeTeam
            console.log(selection)
            console.log(availableUniverse)
        // -- //
        props.a_draftTeam(availableUniverse, selection, homeTeam)
        // -- //
        props.setPickNum(props.pickNum + 1)
    }
    return (
        <StyledTeamDraftCard
            onClick={clickHandler}
        >
            <div>{props.team.city}</div>
            <div>{props.team.name}</div>
        </StyledTeamDraftCard>
    )
}

// Map State To Props
const mapStateToProps = state => {
    return {
        teamUniverse: state.AVAILABLE_UNIVERSE.teamUniverse,
        playerUniverse: state.AVAILABLE_UNIVERSE.playerUniverse,
    }
}

// EXPORT w/ CONNECT
export default connect(
    mapStateToProps, // map state to props
    {
        a_draftTeam
    } // action creators
)(TeamDraftCard)

