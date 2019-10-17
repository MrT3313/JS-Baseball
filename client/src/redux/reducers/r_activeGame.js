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

import {
    DRAFT_PLAYER_START,
    DRAFT_PLAYER_SUCCESS,
    DRAFT_PLAYER_FAILURE,
} from '../actions/a_draftPlayer.js'

// INITIAL STATE
const initialState = {
    is_creatingGame: false,
    is_updating: false,
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
        console.log(action.payload)
        console.log(action.payload.selection)
        // -- //
            if (action.payload.homeTeamBool) {
                return {
                    ...state,
                    is_updating: false,
                    activeGame: {
                        ...state.activeGame,
                        homeTeam: action.payload.selection
                    }
                }
            } else {
                return {
                    ...state,
                    is_updating: false,
                    activeGame: {
                        ...state.activeGame,
                        awayTeam: action.payload.selection
                    }
                }
            }
            
        case DRAFT_TEAM_FAILURE:
            return {
                ...state,
                is_updating: false,
                error: action.payload,
            }
        case DRAFT_PLAYER_START:
            return {
                ...state,
                is_updating: false,
            }
        case DRAFT_PLAYER_SUCCESS:
            console.log('STATE', state)
            console.log(action.payload)

            // https://stackoverflow.com/questions/35628774/how-to-update-single-value-inside-specific-array-item-in-redux

            if (action.payload.homeTeamBool) {
                return {
                    ...state,
                    is_updating: false,
                    activeGame: {
                        ...state.activeGame,
                        homeTeam: {
                            ...state.activeGame.homeTeam,
                            teamPlayers: [...state.activeGame.homeTeam.teamPlayers, action.payload.selection]
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    is_updating: false,
                    activeGame: {
                        ...state.activeGame,
                        awayTeam: {
                            ...state.activeGame.awayTeam,
                            teamPlayers: [...state.activeGame.awayTeam.teamPlayers, action.payload.selection]
                        }
                    }
                }
            }
            // if (action.payload.homeTeamBool) {
            //     return {
            //         ...state,
            //         is_updating: false,
            //         activeGame: {
            //             ...state.activeGame,
            //             activeTeams: {
            //                 ...state.activeGame.activeTeams,
            //             }
            //         }
            //     }
            // } else {

            // }



        case DRAFT_PLAYER_FAILURE:
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