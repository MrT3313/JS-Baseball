// CREATE ACTION TYPES
    export const DRAFT_TEAM_START = 'DRAFT_TEAM_START'
    export const DRAFT_TEAM_SUCCESS = 'DRAFT_TEAM_SUCCESS'
    export const DRAFT_TEAM_FAILURE = 'DRAFT_TEAM_FAILURE'

// ACTION CREATOR
export const a_draftTeam = (pick, team) => dispatch => {
    console.log(pick, team)
    // -- //
        // -1- // First Action
        dispatch({type: DRAFT_TEAM_START})

        if (pick) {
            // -2- // Second Action
            dispatch({ type: DRAFT_TEAM_SUCCESS, payload: {pick, team}})
        } else {
            // -3- // Second Action
            dispatch({DRAFT_TEAM_FAILURE, payload: 'Unable to select team'})
        }
}