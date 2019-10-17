// CREATE ACTION TYPES
export const DRAFT_PLAYER_START = 'DRAFT_PLAYER_START'
export const DRAFT_PLAYER_SUCCESS = 'DRAFT_PLAYER_SUCCESS'
export const DRAFT_PLAYER_FAILURE = 'DRAFT_PLAYER_FAILURE'

// ACTION CREATOR
export const a_draftPlayer = (availableUniverse, selection, homeTeamBool) => dispatch => {

// -- //
    // - 1 - // First Action
    dispatch({type: DRAFT_PLAYER_START})
    // -- //
    let objToPass = {
        playerUniverse: [...availableUniverse],
        selection: selection,
        homeTeamBool: homeTeamBool
    }
        console.log(objToPass)
    // -- //
    if (availableUniverse && selection) {
        // - 2 - // Second Action
        dispatch({type: DRAFT_PLAYER_SUCCESS, payload: objToPass })
    } else {
        // - 3 - // Third Action
        dispatch({DRAFT_PLAYER_FAILURE, payload: 'Unable to select player'})
    }
}