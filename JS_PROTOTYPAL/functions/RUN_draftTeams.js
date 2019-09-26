// -*- IMPORTS -*- //
    // -A- // ES6 Imports
        import ES6_FUNCTIONS_userPick from './draftLogic/RUN_userDraftPick.js.js'
        import ES6_FUNCTIONS_computerPick from './draftLogic/RUN_computerDraftPick.js.js'
        import ES6_INHERITANCE_teamObject from '../inheritance/teamObject.js.js'
    // -B- // Node Imports


const RUN_draftTeams = (numHumanPlayers, teamUniverse) => {
    console.log('-X- insideRUN_draftTeam -X-')
    // --*-- //
    let DRAFT_teamUniverse = teamUniverse
    let computerPickResult = undefined
    let pick_1 = undefined
    let pick_2 = undefined
    // --*-- //
        switch(numHumanPlayers) {
            case 0:
                console.log('-*- 0 Humans -*-')
                    // -1- // returns array [selection, remaining available draft array]
                    computerPickResult = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(DRAFT_teamUniverse)
                        console.log('computerPickResult',computerPickResult)

                    // -2- // set pick 1 & reset available draft array
                    pick_1 = computerPickResult[0][0]
                    pick_1.user = 'computer'
                    console.log('-*- pick_1 -*-',pick_1)
                    DRAFT_teamUniverse = computerPickResult[1]
                    console.log('-*- DRAFT_teamUniverse -*-',DRAFT_teamUniverse)
                    
                    // -3- // returns array [selection, remaining available draft array]
                    computerPickResult = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(DRAFT_teamUniverse)
                        console.log('computerPickResult',computerPickResult)
                    
                    // -4- // set pick 2
                    pick_2 = computerPickResult[0][0]
                    pick_2.user = 'computer'
                    console.log('-*- pick_2 -*-',pick_2)

                break;
            case 1:
                console.log('-*- 1 Humans -*-')
                    // -1- // returns array [selection, remaining available draft array]
                    userPickResult = ES6_FUNCTIONS_userPick.RUN_userDraftPick(teamUniverse)
                        console.log('userPickResult',userPickResult)

                    // -2- // set pick 1 & reset available draft array
                    pick_1 = userPickResult[0][0]
                    pick_1.user = 'user'
                    DRAFT_teamUniverse = userPickResult[1]

                    // -3- // returns array [selection, remaining available draft array]
                    computerPickResult = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(DRAFT_teamUniverse)
                        console.log('computerPickResult',computerPickResult)
                    
                    // -4- // set pick 2
                    pick_2 = computerPickResult[0][0]
                    pick_2.user = 'computer'
                break;
            case 2:
                console.log('-*- 2 Humans -*-')
                    // -1- // returns array [selection, remaining available draft array]
                    userPickResult = ES6_FUNCTIONS_userPick.RUN_userDraftPick(teamUniverse)
                        console.log('userPickResult',userPickResult)

                    // -2- // set pick 1 & reset available draft array
                    pick_1 = userPickResult[0][0]
                    pick_1.user = 'user'
                    DRAFT_teamUniverse = userPickResult[1]

                    // -3- // returns array [selection, remaining available draft array]
                    userPickResult = ES6_FUNCTIONS_userPick.RUN_userDraftPick(teamUniverse)
                        console.log('userPickResult',userPickResult)

                    // -4- // set pick 2
                    pick_2 = userPickResult[0][0]
                    pick_2.user = 'user'
                break;
            default:
                console.log('ERROR - runDraftTeam')
                break;
        }
// console.log(pick_1)
// console.log(pick_2)
const pick_1_result = new ES6_INHERITANCE_teamObject.MAIN_teamObject(pick_1)
const pick_2_result = new ES6_INHERITANCE_teamObject.MAIN_teamObject(pick_2)
// console.log(pick_1_result)
// console.log(pick_2_result)
return [pick_1, pick_2]}

// -*- ES6 EXPORTS -*- //
export default {
    RUN_draftTeams
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }