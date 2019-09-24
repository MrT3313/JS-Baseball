// -*- IMPORTS -*- //
    // -A- // ES6 Imports
        import ES6_FUNCTIONS_userPick from '../functions/draftLogic/RUN_userDraftPick.js'
        import ES6_FUNCTIONS_computerPick from '../functions/draftLogic/RUN_computerDraftPick.js'
        import ES6_INHERITANCE_teamObject from '../inheritance/teamObject.js'
    // -B- // Node Imports


const RUN_draftTeam = (numHumanPlayers, teamUniverse) => {
    console.log('-X- insideRUN_draftTeam -X-')
    // ES6_FUNCTIONS_computerPick.RUN_computerDraftPick()
    // ES6_FUNCTIONS_userPick.RUN_userDraftPick()
    // --*-- //

    let DRAFT_teamUniverse = teamUniverse
        // console.log('-*- draftTeamUniverse -*-', DRAFT_teamUniverse)
    let computerPickResult = undefined
    let pick_1 = undefined
    let pick_2 = undefined

        switch(numHumanPlayers) {
            case 0:
                console.log('-*- 0 Humans -*-')
                    // -1- // returns array [selection, remaining available draft array]
                    computerPickResult = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(DRAFT_teamUniverse)
                        console.log('computerPickResult',computerPickResult)

                    // -2- // set pick 1 & reset available draft array
                    pick_1 = computerPickResult[0]
                    DRAFT_teamUniverse = computerPickResult[1]
                    
                    // -3- // returns array [selection, remaining available draft array]
                    computerPickResult = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(DRAFT_teamUniverse)
                        console.log('computerPickResult',computerPickResult)
                    
                    // -4- // set pick 2
                    pick_2 = computerPickResult[0]
                break;
            case 1:
                console.log('-*- 1 Humans -*-')
                    // -1- // returns array [selection, remaining available draft array]
                    userPickResult = ES6_FUNCTIONS_userPick.RUN_userDraftPick(teamUniverse)
                        console.log('userPickResult',userPickResult)

                    // -2- // set pick 1 & reset available draft array
                    pick_1 = userPickResult[0]
                    DRAFT_teamUniverse = userPickResult[1]

                    // -3- // returns array [selection, remaining available draft array]
                    computerPickResult = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(DRAFT_teamUniverse)
                        console.log('computerPickResult',computerPickResult)
                    
                    // -4- // set pick 2
                    pick_2 = computerPickResult[0]
                break;
            case 2:
                console.log('-*- 2 Humans -*-')
                    // -1- // returns array [selection, remaining available draft array]
                    userPickResult = ES6_FUNCTIONS_userPick.RUN_userDraftPick(teamUniverse)
                        console.log('userPickResult',userPickResult)

                    // -2- // set pick 1 & reset available draft array
                    pick_1 = userPickResult[0]
                    DRAFT_teamUniverse = userPickResult[1]

                    // -3- // returns array [selection, remaining available draft array]
                    userPickResult = ES6_FUNCTIONS_userPick.RUN_userDraftPick(teamUniverse)
                        console.log('userPickResult',userPickResult)

                    // -4- // set pick 2
                    pick_2 = userPickResult[0]
                break;
            default:
                console.log('ERROR - runDraftTeam')
                break;
        }

// pick_1 = new ES6_INHERITANCE_teamObject.MAIN_teamObject(pick_1)
// pick_2 = new ES6_INHERITANCE_teamObject.MAIN_teamObject(pick_2)
return [pick_1, pick_2]}

// -*- ES6 EXPORTS -*- //
export default {
    RUN_draftTeam
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }