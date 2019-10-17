// IMPORTS
    import React, {useEffect} from 'react'
    import {connect} from 'react-redux'
    import styled from 'styled-components'

// COMPONENTS 
    import TeamContainer from '../components/TeamContainer.js'

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

    .gameDate {
        margin-bottom: 10px;
    }

    border-radius: 5px;
    border: 1px solid black
`;
// COMPONENT TO EXPORT
function GameDisplay(props) {
    console.log(props)
    
    // - METHODS - //

    // - USE EFFECT - //
    useEffect(() => {
        console.log('USE EFFECT TRIGGERED')
        console.log(props.activeGame)
    })
    return(
        <GameDisplay_Container>
            <div className='gameDate'>Game Date: {props.activeGame.gameTime}</div>
            <div className='ActiveTeams'>
                <TeamContainer className='team' team={props.homeTeam} type={'home'}/>
                <TeamContainer className='team' team={props.awayTeam} type={'away'}/>
            </div>
        </GameDisplay_Container>
    )
}
// MAP STATE TO PROPS
const mapStateToProps = state => {
    return {
        activeGame: state.ACTIVE_GAME.activeGame,
        homeTeam: state.ACTIVE_GAME.activeGame.homeTeam,
        awayTeam: state.ACTIVE_GAME.activeGame.awayTeam,
    }
}

// EXPORT w/ CONNECT
export default connect(
    mapStateToProps, // map state to props
    {} // action creators
)(GameDisplay)