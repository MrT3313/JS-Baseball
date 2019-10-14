// IMPORTS
    import React, {useEffect} from 'react'
    import {connect} from 'react-redux'
    import styled from 'styled-components'

// COMPONENTS 
    import TeamContainer from './TeamContainer.js'

// STYLED COMPONENTS
const GameDisplay_Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10px;
    padding: 10px;

    .ActiveTeams {
        display: flex;
        justify-content: center;
    }

    border-radius: 5px;
    border: 1px solid black
`;
// COMPONENT TO EXPORT
function GameDisplay({activeGame}) {
    // console.log(props)
    console.log(activeGame)
    // console.log(props.activeGame)
    
    // - METHODS - //

    // - USE EFFECT - //
    useEffect(() => {
        console.log('USE EFFECT TRIGGERED')
        console.log(activeGame)
    })
    return(
        <GameDisplay_Container>
            <div>Game Date: {activeGame.gameTime}</div>
            <div className='ActiveTeams'>
                <TeamContainer homeTeam={'true'}></TeamContainer>
                <TeamContainer homeTeam={'false'}></TeamContainer>
            </div>
        </GameDisplay_Container>
    )
}
// MAP STATE TO PROPS
const mapStateToProps = state => {
    return {
        activeGame: state.ACTIVE_GAME.activeGame,
    }
}

// EXPORT w/ CONNECT
export default connect(
    mapStateToProps, // map state to props
    {} // action creators
)(GameDisplay)