// IMPORTS
import { combineReducers } from 'redux'

// IMPORTING INDIVIDUAL REDUCERS
import {r_activeGame as ACTIVE_GAME} from './r_activeGame.js'

// COMBINED REDUCER
export const rootReducer = combineReducers({
    ACTIVE_GAME,
})