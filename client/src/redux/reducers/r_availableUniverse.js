// IMPORT ACTION CREATORS
import {
    FILL_UNIVERSE_START,
    FILL_UNIVERSE_SUCCESS,
    FILL_UNIVERSE_FAILURE,
} from '../actions/a_fillUniverse.js'

import {
    DRAFT_TEAM_START,
    DRAFT_TEAM_SUCCESS,
    DRAFT_TEAM_FAILURE,
} from '../actions/a_draftTeam.js'

import {
    DRAFT_PLAYER_START,
    DRAFT_PLAYER_SUCCESS,
    DRAFT_PLAYER_FAILURE,
} from '../actions/a_draftPlayer.js'

// INITIAL STATE
const initialState = {
    is_updating: false,
    error: '',
    teamUniverse: [],
    playerUniverse: [],
}

// REDUCER
export const r_availableUniverse = (state = initialState, action) => {
    // console.log(action.payload)
    // -- // 
    switch(action.type) {
    // FILL UNIVERSE
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
    // DRAFTING TEAM
        case DRAFT_TEAM_START:
            return {
                ...state,
                is_updating: true
            }
        case DRAFT_TEAM_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                is_updating: false,
                teamUniverse: [...action.payload.teamUniverse]
            }
        case DRAFT_TEAM_FAILURE:
            return {
                ...state,
                is_updating: false,
                error:'Unable to Draft Team'
            }
        // DRAFTING PLAYER
        case DRAFT_PLAYER_START:
            return {
                ...state,
                is_updating: true,
            }
        case DRAFT_PLAYER_SUCCESS:
            return {
                ...state,
                is_updating: false,
                playerUniverse: [...action.payload.playerUniverse]
            }
        case DRAFT_PLAYER_FAILURE:
            return {
                ...state,
                is_updating: false,
                error:'Unable to Draft Player'
            }
        default:
            return state
    }
}