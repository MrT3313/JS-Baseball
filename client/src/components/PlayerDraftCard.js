// IMPORTS
    import React, {useState, useEffect} from 'react';
    import {connect} from 'react-redux'
    import styled from 'styled-components'

// IMPORT ACTION CREATORS
import {a_draftPlayer} from '../redux/actions/a_draftPlayer.js'

// COMPONENTS 

// STYLED COMPONENTS
const PlayerDraftCard_ClickWrapper = styled.div`
    display: flex;

    margin: 10px;
    padding: 10px;

    .infield {
        background: green;
    }
    .outfield {
        background-color: lightblue;
    }
    .pitcher {
        background-color: orange;
    }
    .dh {
        background-color: red;
    }

    border-radius: 5px;
    border: 1px solid blue;
`;
const StyledPlayerDraftCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .playerState {
        display: flex;
        justify-content: center;
        
        div {
            margin-right: 10px;
        }
        div:last-child {
            margin: 0;
        }
    }
`;

// COMPONENT TO EXPORT
function PlayerDraftCard(props) {
console.log('<PlayerDraftCard /> props', props)
    // -- //
    // - Methods - //
    const clickHandler = () => {
    console.log(props.team)
    console.log(props.id)
    // -- //
        const availableUniverse = props.playerUniverse
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
        props.a_draftPlayer(availableUniverse, selection, homeTeam)
        // -- //
        props.setPickNum(props.pickNum + 1)
    }
    return (
        <PlayerDraftCard_ClickWrapper
            onClick={clickHandler}
        >
            <StyledPlayerDraftCard className={props.player.position}>
                {props.player.lastName ? 
                    <div>{props.player.firstName} {props.player.lastName}</div>
                    :
                    <div>{props.player.firstName}</div>
                }
                <div>{props.player.position}</div>
                <div className='playerState'>
                    <div>{props.player.power}</div>
                    <div>{props.player.skill}</div>
                    <div>{props.player.speed}</div>
                </div>
            </StyledPlayerDraftCard>
        </PlayerDraftCard_ClickWrapper>
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
        a_draftPlayer
    } // action creators
)(PlayerDraftCard)