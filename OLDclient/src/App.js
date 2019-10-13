import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'

// - import & run test script - //
// import TEST_SCRIPT from './simulations/TEST_script.js'

// - Data - //
  import ES6_DATA_teamUniverse from './data/teamUniverse'
  import ES6_DATA_playerUniverse from './data/playerUniverse.js'
// - Functions - //
  import ES6_FUNCTIONS_startGame from './functions/RUN_startGame.js'
  import ES6_FUNCTIONS_fillTeamUniverse from './functions/RUN_fillTeamUniverse'
  import ES6_FUNCTIONS_fillPlayerUniverse from './functions/RUN_fillPlayerUniverse'

// - Components - //
  import GameSummary from './components/GameSummary.js'
  import Button from './components/Button.js'
  import DraftContainer from './components/DraftContainer.js'
  import NumInput from './components/UserNumInput.js'
// - Scripts - //
  import activeScript from './simulations/sim_1.0.2.js'

// - STYLED COMPONENTS - //
const APP_CONTAINER = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 15px; 

  border: 1px solid black
`;

function App() {
  // - STATE - //
    const [state, setState ] = useState('=== Pre-Game ===')
    const [activeGame, setActiveGame] = useState()
    // -- // 
    const [teamUniverse, setTeamUniverse] = useState()
    const [playerUniverse, setPlayerUniverse] = useState()
    // -- //
    const [numHumanPlayers, setHumanPlayers] = useState(undefined)

// -- ** -- ** -- ** //
// -- ** -- ** -- ** //

  // - METHODS - //
    // -1- //
      const createGame = e => {
        const result = ES6_FUNCTIONS_startGame.RUN_startGame()
        setActiveGame(result)
        // -- * -- //
        setState('=== Pre: Fill Player & Team Universe ===')
      }
    // -2- //
      const fillUniverse = e => {
        const teamsResult = ES6_FUNCTIONS_fillTeamUniverse.fillTeamUniverse(ES6_DATA_teamUniverse)
          setTeamUniverse(teamsResult)
          
        const playersResult = ES6_FUNCTIONS_fillPlayerUniverse.fillPlayerUniverse(ES6_DATA_playerUniverse)
          setPlayerUniverse(playersResult)  
        // -- * -- //
        setState('=== Pre: Check Num of Human Players ===')
      }
    // -3- //
      const getHumanPlayers = num => {
        setHumanPlayers(num)
      }
    // -4- //
      const draftTeams = e => {
        // setState('=== Drafting Teams ===')
        // setState('=== Teams Drafted ===')
      }




    const draftPlayers = e => {
      setState('=== Players Drafted ===')
    }

// -- ** -- ** -- ** //
// -- ** -- ** -- ** //
    
    // - USE EFFECT - //
      // -1- //
        useEffect(() => {
          console.log('USE EFFECT TRIGGERED')
          // setState('POST: gameObject made // PRE: User Starts Game')
          console.log(state)
          console.log(activeGame)
          console.log(teamUniverse)
          console.log(playerUniverse)
          console.log(numHumanPlayers)
        })
      // -2- //
        useEffect(() => {
          if (numHumanPlayers !== undefined) {
            console.log('IF TRIGGERED')
            setState('=== Pre: Drafting Teams ===')
          }
        }, [numHumanPlayers])

// -- ** -- ** -- ** //
// -- ** -- ** -- ** //
    
  // - COMPONENT TO EXPORT - //
    return (
      <APP_CONTAINER className="App">
        <h1>Welcome To Today's Game!</h1>
        {/* -1- */}
          {state === '=== Pre-Game ===' && 
            <Button 
              buttonFunction={createGame}
              buttonText={'Start Game!'}
            />}
          {activeGame && <GameSummary activeGame={activeGame} state={state} />}

        {/* -2- */}
          {/* {state === '=== Pre: Fill Player & Team Universe ===' &&
            <Button 
              buttonFunction={fillUniverse}
              buttonText={'Fill Player & Team Universe!'}
            />} */}

        {/* -3- */}
          {/* {state === '=== Pre: Check Num of Human Players ===' &&
            <>                  
              <NumInput getHumanPlayers={getHumanPlayers}/>        
            </>
          } */}
        
        {/* -4- */}
          {/* {state === '=== Pre: Drafting Teams ===' &&
            <DraftContainer teamUniverse={teamUniverse}/>
          } */}




          
      {/* // -- * -- // */}
        {/* {state === '=== Team Draft Players ===' &&
          <Button 
            buttonFunction={draftTeams}
            buttonText={'Ready to draft your TEAMS??'}
          />} */}
      {/* // -- * -- // */}
        {/* {state === '=== Teams Drafted ===' &&
          <Button 
            buttonFunction={draftPlayers}
            buttonText={'Ready to draft your PLAYERS??'}
          />} */}
      </APP_CONTAINER>
    );
}

// -- ** -- ** -- ** //
// -- ** -- ** -- ** //

// - EXPORT w/ CONNECT - //
export default connect(
	null, // map state to props
	{} // action creators
)(App)
