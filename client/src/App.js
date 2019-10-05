import React, { useState, useEffect } from 'react';

// - import & run test script - //
// import TEST_SCRIPT from './simulations/TEST_script.js'

// - Functions - //
  import ES6_FUNCTIONS_startGame from './functions/RUN_startGame.js'

// - Scripts - //
  import activeScript from './simulations/sim_1.0.2.js'


function App() {
  // - STATE - //
    const [state, setState ] = useState('=== Pre-Game ===')
    const [activeGame, setActiveGame] = useState({})

  // - METHODS - //
    const createGame = e => {
      const result = ES6_FUNCTIONS_startGame.RUN_startGame()
      // -- * -- //
      setActiveGame(result)
      setState('=== Game Created ===')
    }

    useEffect(() => {
      console.log('USE EFFECT TRIGGERED')
      // setState('POST: gameObject made // PRE: User Starts Game')
      console.log(state)
      console.log(activeGame)
    })

  // - COMPONENT TO EXPORT - //
    return (
      <div className="App">
        <h1>Welcome To Today's Game!</h1>
        {state === '=== Pre-Game ===' && 
          <button onClick={createGame}>Start Game!</button>}
        
        {state === '=== Game Created ===' && 
          <div>
            <h2>{activeGame.eventName}</h2>
            <p>
              {`Game Time: ${activeGame.gameTime}`}
            </p>
          </div>
        }
      </div>
    );
}

// - EXPORTS - //
export default App;
