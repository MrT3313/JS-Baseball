const checkRosterCategory = (team, selection, malleable_draftArray) => {
    console.log('inside position check')
    
    let result = undefined
    const categoryCheck_SUCCESS = 'Go Ahead! Add The Player To Your Roster!'
    const categoryCheck_FAILURE = 'You have already filled that position. Please pick again'


    console.log(selection.position)
// debugger
    switch(selection.position) {
        /* 
            false = failed checkPosition --> add player to team
        */
        case 'infield':
            result = team.checkPosition(team, 'infielders')
                console.log('--- Current Position Array Length ---',team.teamPlayers['infielders'].length)
                console.log('--- Check Position Result ---', result)

            if (result === false) {
                console.log(`--- Draft Update: ${categoryCheck_SUCCESS} ---`)

                team.teamPlayers['infielders'].push(selection)
                return team
            } else {
                console.log(`--- !!! Draft Update: ${categoryCheck_FAILURE} !!! ---`)
                malleable_draftArray.push(selection)

                return [false, malleable_draftArray]
            }

        case 'outfield':
            result = team.checkPosition(team, 'outfielders')
                console.log('--- Current Position Array Length ---', team.teamPlayers['outfielders'].length)
                console.log('--- Check Position Result ---', result)

            if (result === false) {
                console.log(`--- Draft Update:  ${categoryCheck_SUCCESS} ---`)

                team.teamPlayers['outfielders'].push(selection)
                return team
            } else {
                console.log(`--- !!! Draft Update: ${categoryCheck_FAILURE} !!! ---`)
                malleable_draftArray.push(selection)
                return [false, malleable_draftArray]
            }

        case 'pitcher':
            result = team.checkPosition(team, 'pitchers')
                console.log('--- Current Position Array Length ---', team.teamPlayers['pitchers'].length)
                console.log('--- Check Position Result ---',result)

            if (result === false) {
                console.log(`--- Draft Update:  ${categoryCheck_SUCCESS} ---`)

                team.teamPlayers['pitchers'].push(selection)
                return team
            } else {
                console.log(`--- !!! Draft Update: ${categoryCheck_FAILURE} !!! ---`)

                malleable_draftArray.push(selection)
                return [false, malleable_draftArray]
            }

        case 'DH':
            result = team.checkPosition(team, 'DHs')
                console.log('--- Current Position Array Length ---', team.teamPlayers['DHs'].length)
                console.log('--- Check Position Result ---',result)

            if (result === false) {
                console.log(`--- Draft Update:  ${categoryCheck_SUCCESS} ---`)

                team.teamPlayers['DHs'].push(selection)
                return team
            } else {
                console.log(`--- Draft Update: ${categoryCheck_FAILURE} ---`)

                malleable_draftArray.push(selection)

                return [false, malleable_draftArray]
            }
        default:
            return 'what is going on'
    }
}

// -- EXPORTS -- //
    module.exports = {
        checkRosterCategory
    }