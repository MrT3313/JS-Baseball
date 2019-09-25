// -*- IMPORTS -*- //
    // -A- // ES6 Imports
    import ES6_FUNCTIONS_userPick from './draftLogic/RUN_userDraftPick.js'
    import ES6_FUNCTIONS_computerPick from './draftLogic/RUN_computerDraftPick.js'
    import ES6_INHERITANCE_playerObject from '../inheritance/playerObject.js'
// -B- // Node Imports



const RUN_draftPlayers = (todaysGame, playerUniverse) => {
    console.log(todaysGame)
    console.log(playerUniverse)
    // -- * -- //
    let computerPickResult = undefined
    let roster_1_CheckResult = undefined
    let roster_2_CheckResult = undefined
    let team_1 = undefined
    let team_2 = undefined
    let pick = undefined
    let HELPER_filterByPosition = []
    let HELPER_checkPositionResult = []

    while (!roster_1_CheckResult && !roster_2_CheckResult) { // Main Roster Check
        // debugger
        // -- * -- //
            let DRAFT_playerUniverse = playerUniverse
            team_1 = todaysGame.activeTeams[0]
                console.log(team_1)
            team_2 = todaysGame.activeTeams[1]
                console.log(team_2)
        // -- * -- //

        // -- * -- //
        todaysGame.activeTeams.forEach(team => {
            // debugger
            console.log(team)
            console.log(team.user)
            // -- * -- //
            if (team.user === 'computer') {
                console.log('-*- computer pick -*-')
                // -- * -- //
                // -1- //
                computerPickResult = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(DRAFT_playerUniverse)
                    console.log('computerPickResult', computerPickResult)

                // -2- //
                pick = computerPickResult[0][0]
                    console.log('-*- pick_1 -*-',pick)
                DRAFT_playerUniverse = computerPickResult[1]
                    console.log('-*- DRAFT_playerUniverse -*-',DRAFT_playerUniverse)
                
                // -3- //
                console.log(pick.position)
                console.log(team)

                do {
                    HELPER_checkPositionResult = team.CHECK_Position(pick.position)
                        console.log(HELPER_checkPositionResult)
                    if (HELPER_checkPositionResult === true) {
                        // debugger
                        computerPickResult = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(DRAFT_playerUniverse)
                            console.log('computerPickResult', computerPickResult)
                        
                        pick = computerPickResult[0][0]
                        DRAFT_playerUniverse = computerPickResult[1]
                    }
                    // debugger
                } while (HELPER_checkPositionResult === true)


                // do {
                //     // -3- //
                //     HELPER_filterByPosition = team.teamPlayers.filter(player => player.position === pick.position)
                //     console.log(HELPER_filterByPosition)
                    
                //     // -4- // 
                    
                // } while ()
                // -- * -- //
                team.teamPlayers.push(pick)
                    console.log(team.teamPlayers.length)
            } else if (team.user === 'user') {
                console.log('-*- user pick -*-')
            } else {
                console.log('ERROR')
            }
        })
        // debugger
        // -- * -- // Check Roster
        roster_1_CheckResult = team_1.CHECK_Roster()
            console.log('-*- roster_1_CheckResult -*-',roster_1_CheckResult)

        roster_2_CheckResult = team_2.CHECK_Roster()
            console.log('-*- roster_2_CheckResult -*-',roster_2_CheckResult)
    }
    
    // -- * -- //
    console.log('HOLY SHIT')
    console.log(todaysGame)
    return todaysGame



    // -- * -- //
    // let roster_positionCheckResult = team_1.CHECK_Position('infield')
    //     console.log('-*- roster_positionCheckResult -*-',roster_positionCheckResult)
    
    

    /*
        [x] maluable draftArray
        [x] ability to check status of current roster
        [] while loop on ^^ failure 
            [] differentiate between user and computer pick 
            [] return selection & updated maluable array
        [] update currentSelection
    */
    
    // --*-- //
    // console.log('-X- insideRUN_draftPlayer -X-')
    // --*-- //
    
    // let computerPickResult = undefined
    // let pickPosition = undefined 
    // let pick_1 = undefined
    // let pick_2 = undefined
    // --*-- //
}

// -*- ES6 EXPORTS -*- //
export default {
    RUN_draftPlayers
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }