// IMPORT ACTION CREATORS
import {
    CREATE_GAME_START,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_FAILURE,
} from '../actions/a_createGame.js'

import {
    DRAFT_TEAM_START,
    DRAFT_TEAM_SUCCESS,
    DRAFT_TEAM_FAILURE,
} from '../actions/a_draftTeam.js'

// INITIAL STATE
const initialState = {
    is_updating: false,
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
    // START GAME
        case CREATE_GAME_START:
            return {
                ...state,
                is_creatingGame: true,
            }
        case CREATE_GAME_SUCCESS:
            return {
                ...state,
                is_creatingGame: false,
                activeGame: action.payload
            }
        case CREATE_GAME_FAILURE:
            return {
                ...state,
                is_creatingGame: false,
            }
    // DRAFT TEAM
        case DRAFT_TEAM_START:
            return {
                ...state,
                is_updating: true
            }
        case DRAFT_TEAM_SUCCESS:
            console.log(state)
            console.log(action.payload.selection)
            return {
                ...state,
                is_updating: false,
                activeGame: {
                    ...state.activeGame,
                    activeTeams: [...state.activeGame.activeTeams, action.payload.selection]
                }
            }
        case DRAFT_TEAM_FAILURE:
            return {
                ...state,
                is_updating: false,
                error: action.payload,
            }
    // DEFAULT
        default:
            return state
    }
}