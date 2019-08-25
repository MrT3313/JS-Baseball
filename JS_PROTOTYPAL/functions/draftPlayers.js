// Draft Players

const draftPlayers = (num_human_players, todaysCompetiton, playerUniverse) => {
    console.log(todaysCompetiton)
    console.log(playerUniverse)

    let malleable_draftArray = playerUniverse.map(item => item)
        console.log(playerUniverse.length)
        console.log(malleable_draftArray.length)

    // console.log(todaysCompetiton[0].checkRoster())
    // console.log(todaysCompetiton[1].checkRoster())

    while 
        ( 
            !todaysCompetiton[0].checkRoster() && 
            !todaysCompetiton[1].checkRoster()
        ) {
            todaysCompetiton.forEach(team => {
                console.log(team.teamPlayers)
                let result = undefined
                // console.log(team.user)
                debugger
                let i = 0
                switch(team.user) {
                    case 'Computer':
                        do { console.log(i)
                            // if (i > 1) {
                            //     alert('STOP')
                            //     stop
                            //     debugger
                            // }

                            result = computerPick(malleable_draftArray)
                                // console.log(result)
                            malleable_draftArray = result[1]
                                // console.log(malleable_draftArray)
    
                            if (malleable_draftArray.length === 0) {
                                stop
                                debugger
                            }

                            adjustedTeam = checkRosterCategory(team, result[0], malleable_draftArray)
                                console.log(adjustedTeam)
debugger
                        i++} while(
                            adjustedTeam === false
                        )
                        
                        console.log('--- AdjustedTeam ---', adjustedTeam)
// debugger
                        return adjustedTeam
                    case 'User':
                    default:
                        return 'Whats Going On'
                }
            })
        console.log(`=== UPDATED TODAYS COMPETITION ===`, todaysCompetiton)
        console.log(`=== PLAYER UNIVERSE ===`, playerUniverse.length)
        console.log(`=== UPDATE MALLEABLE DRAFT ARRAY ===`, malleable_draftArray.length)
        debugger}

    if (todaysCompetiton[0].teamPlayers.infielders.length < 4) {
        console.log('FIX THIS')
    }
}

// - 1 - // Infielders
// - 1 - // Infielders
// - 1 - // Infielders