// -*- IMPORTS -*- //
    // -A- // ES6 Imports
    import ES6_FUNCTIONS_userPick from '../functions/draftLogic/RUN_userDraftPick.js'
    import ES6_FUNCTIONS_computerPick from '../functions/draftLogic/RUN_computerDraftPick.js'
    import ES6_INHERITANCE_playerObject from '../inheritance/playerObject.js'
// -B- // Node Imports



const RUN_draftPlayers = (numHumanPlayers, playerUniverse) => {
    console.log('-X- insideRUN_draftPlayer -X-')
    // --*-- //
    let DRAFT_playerUniverse = playerUniverse
    let computerPickResult = undefined
    let pickPosition = undefined 
    let pick_1 = undefined
    let pick_2 = undefined
    // --*-- //

        switch(numHumanPlayers) {
            case 0:
                console.log('-*- 0 Humans -*-')
                // -1- // 
                computerPickResult = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(DRAFT_playerUniverse)
                    console.log(computerPickResult)

                // -2- //
                DRAFT_playerUniverse = computerPickResult[1]
                pick_1 = computerPickResult[0]

                // -3- //
                /* 
                    TODO: Check Roster!
                    -- what is the position
                    -- what does the roster currently have
                */

                // // -3- //
                // computerPickResult = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(DRAFT_playerUniverse)
                //     console.log(computerPickResult)
                
                // // -4- //
                // pick_2 = computerPickResult[0]

                break;
            case 1:
                console.log('-*- 1 Humans -*-')
                break;
            case 2:
                console.log('-*- 2 Humans -*-')
                break;
            default:
                console.log('ERROR - runDraftPlayers')
                break;
        }
}

// -*- ES6 EXPORTS -*- //
export default {
    RUN_draftPlayers
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }