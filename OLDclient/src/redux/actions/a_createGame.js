// IMPORTS
    // -1- // Functions
        import ES6_FUNCTIONS_startGame from '../../functions/RUN_startGame.js'
// CREATE ACTION TYPES
    export const CREATE_GAME_START = 'CREATE_GAME_START'
    export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS'
    export const CREATE_GAME_FAILURE = 'CREATE_GAME_FAILURE'

// ACTION CREATOR
    export const a_createGame = () => {

        // -1- // First Dispatch
        return dispatchEvent => {
            dispatchEvent({ type: CREATE_GAME_START })

            // -2- // Second Dispatch
            const result = ES6_FUNCTIONS_startGame.RUN_startGame()
                console.log(result)
        }
    }

