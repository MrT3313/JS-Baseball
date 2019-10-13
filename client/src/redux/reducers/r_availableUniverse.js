// IMPORT ACTION CREATORS
import {
    FILL_UNIVERSE_START,
    FILL_UNIVERSE_SUCCESS,
    FILL_UNIVERSE_FAILURE,
} from '../actions/a_fillUniverse.js'

// INITIAL STATE
const initialState = {
    is_updating: false,
    error: '',
    teamUniverse: [],
    playerUniverse: [],
}

// REDUCER
export const r_availableUniverse = (state = initialState, action) => {
    console.log(action.payload)
    // -- // 
    switch(action.type) {
        case FILL_UNIVERSE_START:
            return {
                ...state,
                is_updating: false,
            }
        case FILL_UNIVERSE_SUCCESS:
            return {
                ...state,
                is_updating: false,
                error: '',
                teamUniverse: [...action.payload.teamUniverse],
                playerUniverse: [...action.payload.playerUniverse],
            }
        case FILL_UNIVERSE_FAILURE:
            return {
                ...state,
                is_updating: false,
                error: 'Unable to Fill Universe',
            }
        default:
            return state
    }
}