// IMPORTING FUNCTIONS
import fillTeamUniverse from '../../functions/RUN_fillTeamUniverse.js'
import fillPlayerUniverse from '../../functions/RUN_fillPlayerUniverse.js'

// DATA
import teams_array from '../../data/teamUniverse.js'
import * as PLAYER_UNIVERSE from '../../data/playerUniverse.js'

// CREATE ACTION TYPES
    export const FILL_UNIVERSE_START = 'FILL_UNIVERSE_START'
    export const FILL_UNIVERSE_SUCCESS = 'FILL_UNIVERSE_SUCCESS'
    export const FILL_UNIVERSE_FAILURE = 'FILL_UNIVERSE_FAILURE'

export const a_fullUniverse = () => dispatch => {
    console.log(fillTeamUniverse)
    console.log(teams_array)
    console.log(PLAYER_UNIVERSE.default)
    console.log(typeof PLAYER_UNIVERSE.default)
    // -1- // FIRST DISPATCH
        dispatch({ type: FILL_UNIVERSE_START})
    // -- //
        const teamUniverse = fillTeamUniverse.fillTeamUniverse(teams_array)
        console.log(teamUniverse)
    // -- //
        const importedPositionArrays = PLAYER_UNIVERSE.default
        let playerUniverse = []
        const objectKeys = Object.keys(importedPositionArrays)
            console.log(objectKeys)
        objectKeys.forEach(position => {
            let selectedArray = importedPositionArrays[position]
            playerUniverse = [...playerUniverse, ...selectedArray]
            return playerUniverse
        })
    // -- // 
        if (playerUniverse.length !== 0 && teamUniverse.length !== 0) {
            // -2- // SECOND DISPATCH
            dispatch({ type: FILL_UNIVERSE_SUCCESS, payload: {
                playerUniverse,
                teamUniverse, 
            }})
        } else {
            // -3- // SECOND DISPATCH
            dispatch({ type: FILL_UNIVERSE_FAILURE, payload: 'Unable to Fill Universe'})
        }
    

// console.log(playerUniverse)
// return playerUniverse
}