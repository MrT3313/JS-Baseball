// CREATE ACTION TYPES
    export const DRAFT_TEAM_START = 'DRAFT_TEAM_START'
    export const DRAFT_TEAM_SUCCESS = 'DRAFT_TEAM_SUCCESS'
    export const DRAFT_TEAM_FAILURE = 'DRAFT_TEAM_FAILURE'


// ACTION CREATOR
export const a_draftTeam = (availableUniverse, selection, homeTeamBool) => dispatch => {
    
    // -- //
        // -1- // First Action
        dispatch({type: DRAFT_TEAM_START})
        // -- //
        let objToPass = {
            teamUniverse: [...availableUniverse],
            selection,
            homeTeamBool,
        }
            console.log(objToPass)
        // -- //
        if (availableUniverse && selection) {
            // -2- // Second Action
            dispatch({type: DRAFT_TEAM_SUCCESS, payload: objToPass })
        } else {
            // -3- // Second Action
            dispatch({DRAFT_TEAM_FAILURE, payload: 'Unable to select team'})
        }
}