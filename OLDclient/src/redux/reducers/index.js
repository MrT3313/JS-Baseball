// IMPORTS
import { combineReducers} from 'redux'

// INDIVIDUAL REDUCERS
import {r_activeGame} from './r_activeGame.js' 

// COMBINED REDUCER
export const rootReducer = combineReducers({
    r_activeGame
})