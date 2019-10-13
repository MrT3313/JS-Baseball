// IMPORT ACTION CREATORS
import {
    CREATE_GAME_START,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_FAILURE,
} from '../actions/a_createGame.js'

// INITIAL STATE
const initialState = {
    gameState: '',
    is_creatingGame: false,
    error: '',
    activeGame: undefined
}

// REDUCER
export const r_activeGame = (state = initialState, action) => {
    // console.log(state,action)
    // console.log(action.payload)
    // -- //
    switch(action.type) {
        case CREATE_GAME_START:
            return {
                ...state,
                is_creatingGame: true,
            }
        case CREATE_GAME_SUCCESS:
            return {
                ...state,
                is_creatingGame: false,
                gameState: 'Pre: Fill Universe',
                activeGame: action.payload
            }
        case CREATE_GAME_FAILURE:
            return {
                ...state,
                is_creatingGame: false,
            }
        default:
            return state
    }
}