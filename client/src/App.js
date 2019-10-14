// IMPORTS
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'

// IMPORT FUNCTIONS
import RUN_startGame from './functions/RUN_startGame.js'

// IMPORT ACTION CREATORS
import {a_createGame} from './redux/actions/a_createGame.js'
import {a_fillUniverse} from './redux/actions/a_fillUniverse.js'

// COMPONENTS
import GameDisplay from './views/GameDisplay.js'
import TeamDraftCard from './components/TeamDraftCard.js'

// STYLED COMPONENTS
const APP_CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TEAM_UNIVERSE_CONTAINER = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  border-radius: 5px;
  border: 1px solid orange;
`;

// COMPONENT TO EXPORT
function App(props) {
// console.log(props)
// console.log(props.a_createGame)
// console.log('activeGame',activeGame)
// console.log('activeGame',props.activeGame)
  // -- //
    const [gameState, setGameState] = useState('Pre: Game')
  // - METHODS - //
    const helper_createGame = () => {
      let result = RUN_startGame.RUN_startGame()
        // console.log(result)
      // -- //
      props.a_createGame(result)
      // -- //
      setGameState('Pre: Fill Universe')
    }
    const helper_fillUniverse = () => {
      props.a_fillUniverse()
      // -- //
      setGameState('Pre: Team Draft')
    }
  // -USE EFFECT- //
  useEffect(() => {
    console.log('<App/> Use Effect Triggered')
    console.log(gameState)
  })
  // -- //
  return (
    <APP_CONTAINER className="App">
      <h1>Welcome to Todays Game!</h1>
      {props.activeGame &&
        <GameDisplay activeGame={props.activeGame}/>
      }
      
      {gameState === 'Pre: Game' &&
        <button
          onClick={helper_createGame}
        >Create Todays Game</button>
      }
      {gameState === 'Pre: Fill Universe' &&
        <button
          onClick={helper_fillUniverse}
        >Click To Fill Player & Team Universe</button>
      }
      {gameState === 'Pre: Team Draft' &&
        <TEAM_UNIVERSE_CONTAINER>
          {props.teamUniverse.map(team => {
            console.log(team)
            return <TeamDraftCard team={team}/>
          })}
        </TEAM_UNIVERSE_CONTAINER>
      }
    </APP_CONTAINER>
  );
}

// MAP STATE TO PROPS
const mapStateToProps = state => {
  return {
    activeGame: state.ACTIVE_GAME.activeGame,
    teamUniverse: state.AVAILABLE_UNIVERSE.teamUniverse,
    playerUniverse: state.AVAILABLE_UNIVERSE.playerUniverse,
  }
}

// EXPORT w/ CONNECT
export default connect(
	mapStateToProps, // map state to props
	{
    a_createGame,
    a_fillUniverse
  } // action creators
)(App)

