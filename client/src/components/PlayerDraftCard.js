// IMPORTS
    import React, {useState, useEffect} from 'react';
    import {connect} from 'react-redux'
    import styled from 'styled-components'

// IMPORT ACTION CREATORS

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


`;

// COMPONENT TO EXPORT
function PlayerDraftCard(props) {
console.log('<PlayerDraftCard /> props', props)
    // -- //
    // - Methods - //
    const clickHandler = () => {

    }
    return (
        <PlayerDraftCard_ClickWrapper
            onClick={clickHandler}
        >
            <StyledPlayerDraftCard className={props.player.position}>
                {props.player.lastName ? 
                    <div>Name: {props.player.firstName} {props.player.lastName}</div>
                    :
                    <div>Name: {props.player.firstName}</div>
                }
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
        
    } // action creators
)(PlayerDraftCard)