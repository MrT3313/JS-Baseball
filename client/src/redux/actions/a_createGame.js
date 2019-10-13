// IMPORT FUNCTIONS
    // import RUN_startGame from '../../functions/RUN_startGame.js'

// CREATE ACTION TYPES
    export const CREATE_GAME_START = 'CREATE_GAME_START'
    export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS'
    export const CREATE_GAME_FAILURE = 'CREATE_GAME_FAILURE'

// ACTION CREATOR
export const a_createGame = (result) => dispatch => {
    // console.log(result)
    // -- //
        // -1- // FIRST Action
        dispatch({ type: CREATE_GAME_START}) 
        
        if(result) {
            // -2- // SECOND Action 
            dispatch({ type: CREATE_GAME_SUCCESS, payload: result})
        } else {
            // -3- // THIRD Action 
            dispatch({ type: CREATE_GAME_FAILURE, payload: 'Unable To Create Game'})
        }
}