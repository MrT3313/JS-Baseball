// IMPORTS
import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'

// IMPORT FUNCTIONS
import RUN_startGame from './functions/RUN_startGame.js'

// IMPORT ACTION CREATORS
import {a_createGame} from './redux/actions/a_createGame.js'

// COMPONENTS
import GameDisplay from './views/GameDisplay.js'

// STYLED COMPONENTS
const APP_CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// COMPONENT TO EXPORT
function App(props, {activeGame}) {
  // console.log(props)
  // console.log(props.a_createGame)
  // console.log('activeGame',activeGame)
  // console.log('activeGame',props.activeGame)
  // -- //
  const helper_createGame = () => {
    let result = RUN_startGame.RUN_startGame()
      // console.log(result)

    props.a_createGame(result)
  }
  // -- //
  return (
    <APP_CONTAINER className="App">
      <h1>Welcome to Todays Game!</h1>
      {!props.activeGame &&
        <button
          onClick={helper_createGame}
        >Create Todays Game</button>
      }
      {props.activeGame &&
        <GameDisplay />
      }
    </APP_CONTAINER>
  );
}

// MAP STATE TO PROPS
const mapStateToProps = state => {
  return {
    activeGame: state.ACTIVE_GAME.activeGame
  }
}

// EXPORT w/ CONNECT
export default connect(
	mapStateToProps, // map state to props
	{a_createGame} // action creators
)(App)

