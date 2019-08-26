// -- IMPORTS -- //
    const COMPUTER_PICK = require('../functions/draft_computerPick.js')
    const USER_PICK = require('../functions/draft_userPick.js')
    const CHECK_ROSTER_CATEGORY = require('../functions/draft_checkRosterCategory.js')
// Draft Players

const draftPlayers = (todaysCompetiton, playerUniverse) => {
    // console.log(todaysCompetiton)
    // console.log(playerUniverse)

    
    // -- Variables -- //
        let result = undefined
        let initialSelection = undefined
        let adjustedTeam = undefined
        
    
    let malleable_draftArray = playerUniverse.map(item => item)

    while 
        ( 
            !todaysCompetiton[0].checkRoster() || 
            !todaysCompetiton[1].checkRoster()
        ) {
            todaysCompetiton.forEach(team => {
                console.log('=== start pick ===')
                let i = 0

                switch(team.user) {
                    case 'Computer':
                        do { console.log('failed selection i loop',i)
                            console.log(malleable_draftArray.length)
                            result = COMPUTER_PICK.computerPick(malleable_draftArray)
                                // console.log(result)
                            initialSelection = result[0]
                                console.log('--- Initial Selection ---',initialSelection)
                            malleable_draftArray = result[1]
                                // console.log(malleable_draftArray)

                            // -- *** -- //

                            adjustedTeam = CHECK_ROSTER_CATEGORY.checkRosterCategory(team, initialSelection, malleable_draftArray)
                                // console.log('---New Result---', adjustedTeam)
                            
                            if (adjustedTeam[0] === false) {
                                malleable_draftArray = adjustedTeam[1]
                                // console.log(malleable_draftArray)
                            } else {
                                console.log('--- outfielders', adjustedTeam.teamPlayers.outfielders.length)
                                console.log('--- infielders',adjustedTeam.teamPlayers.infielders.length)
                                console.log('--- pitchers',adjustedTeam.teamPlayers.pitchers.length)
                                console.log('--- DHs',adjustedTeam.teamPlayers.DHs.length)                              
                            }
                            // console.log(adjustedTeam)
                        i++} while(
                            adjustedTeam === false
                        )
                        
                        // console.log('--- AdjustedTeam ---', adjustedTeam)
                        return adjustedTeam
                    case 'User':
                        do { console.log(i)
                            result = USER_PICK.userPick(malleable_draftArray)
                            malleable_draftArray = result[1]
                            adjustedTeam = CHECK_ROSTER_CATEGORY.checkRosterCategory(team, result[0], malleable_draftArray)
                                // console.log(adjustedTeam)
                        i++} while(
                            adjustedTeam === false
                        )
                        return adjustedTeam
                    default:
                        return 'Whats Going On'
                }
            }
        )
        // console.log(`=== PLAYER UNIVERSE ===`, playerUniverse.length)
        console.log(`=== UPDATE MALLEABLE DRAFT ARRAY ===`, malleable_draftArray.length)
        // console.log(`=== UPDATED TODAYS COMPETITION ===`, todaysCompetiton)
    
    console.log(todaysCompetiton[0].checkRoster())
    console.log(todaysCompetiton[1].checkRoster())
    }
console.log('=== DRAFT OVER ===')
return todaysCompetiton}

// -- EXPORTS -- //
    module.exports = {
        draftPlayers
    }