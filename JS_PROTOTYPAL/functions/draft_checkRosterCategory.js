const checkRosterCategory = (team, selection, malleable_draftArray) => {
    // console.log('inside position check')
    
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
            
                // console.log(result)
                // console.log(team)
                // console.log(team.teamPlayers['infielders'])

            if (result === false) {
                console.log(`--- Draft Update: ${categoryCheck_SUCCESS} ---`)

                team.teamPlayers['infielders'].push(selection)
                return team
            } else {
                console.log(`--- Draft Update: ${categoryCheck_FAILURE} ---`)
                console.log(malleable_draftArray)
                malleable_draftArray.push(selection)
                console.log(malleable_draftArray)
                
                return false
            }

        case 'outfield':
            result = team.checkPosition(team, 'outfielders')
                // console.log(result)

            if (result === false) {
                console.log(`--- Draft Update:  ${categoryCheck_SUCCESS} ---`)

                team.teamPlayers['outfielders'].push(selection)
                return team
            } else {
                console.log(`--- Draft Update: ${categoryCheck_FAILURE} ---`)
                return false
            }

        case 'pitcher':
            result = team.checkPosition(team, 'pitchers')
                // console.log(result)

            if (result === false) {
                console.log(`--- Draft Update:  ${categoryCheck_SUCCESS} ---`)

                team.teamPlayers['pitchers'].push(selection)
                return team
            } else {
                console.log(`--- Draft Update: ${categoryCheck_FAILURE} ---`)
                return false
            }

        case 'DH':
            result = team.checkPosition(team, 'DHs')
                // console.log(result)

            if (result === false) {
                console.log(`--- Draft Update:  ${categoryCheck_SUCCESS} ---`)

                team.teamPlayers['DHs'].push(selection)
                return team
            } else {
                console.log(`--- Draft Update: ${categoryCheck_FAILURE} ---`)
                return false
            }

        default:
            return 'what is going on'
    }
}