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
            <div>Game Date: {props.activeGame.gameTime}</div>
            <div className='ActiveTeams'>
                {props.activeTeams.length !== 0 &&
                    props.activeTeams.map(team => {
                        console.log('THIS IS A TEAM!!!!',team)
                        return <TeamContainer team={team} />
                    })
                }
            </div>
        </GameDisplay_Container>
    )
}
// MAP STATE TO PROPS
const mapStateToProps = state => {
    return {
        activeGame: state.ACTIVE_GAME.activeGame,
        activeTeams: state.ACTIVE_GAME.activeGame.activeTeams,
    }
}

// EXPORT w/ CONNECT
export default connect(
    mapStateToProps, // map state to props
    {} // action creators
)(GameDisplay)