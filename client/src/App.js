// IMPORTS
import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'

// IMPORT FUNCTIONS
import RUN_startGame from './functions/RUN_startGame.js'

// IMPORT ACTION CREATORS
import {a_createGame} from './redux/actions/a_createGame.js'

// STYLED COMPONENTS
const APP_CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 10px;
  }
`;

// COMPONENT TO EXPORT
function App(props) {
  console.log(props)
  console.log(props.a_createGame)
  // console.log('activeGame',activeGame)
  // -- //
  const helper_createGame = e => {
    let result = RUN_startGame.RUN_startGame()
      // console.log(result)

    props.a_createGame(result)
  }
  // -- //
  return (
    <APP_CONTAINER className="App">
      <div>Welcome to Todays Game!</div>
      {!props.activeGame &&
        <button
          onClick={helper_createGame}
        >Create Todays Game</button>
      }
      {props.activeGame &&
        <div>
          SHOW GAME INFO
        </div>
      }
    </APP_CONTAINER>
  );
}

// MAP STATE TO PROPS
const mapStateToProps = state => {
  return {
    activeGame: state.activeGame
  }
}

// EXPORT w/ CONNECT
export default connect(
	mapStateToProps, // map state to props
	{a_createGame} // action creators
)(App)

