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
    let pickNumber = 1
    let pick_1 = undefined
    let pick_2 = undefined

        // console.log('-*- i -*-', i)
        console.log('-*- pickNumber -*-', pickNumber)

        switch(numHumanPlayers) {
            case 0:
                console.log('-*- 0 Humans -*-')
                    // console.log(pickNumber)
                    pick_1 = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(teamUniverse)
                    ++pickNumber
                    // console.log(pickNumber)
                    pick_2 = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(teamUniverse)
                break;
            case 1:
                console.log('-*- 1 Humans -*-')
                    // console.log(pickNumber)
                    pick_1 = ES6_FUNCTIONS_userPick.RUN_userDraftPick(teamUniverse)
                    ++pickNumber
                    // console.log(pickNumber)
                    pick_2 = ES6_FUNCTIONS_computerPick.RUN_computerDraftPick(teamUniverse)
                break;
            case 2:
                console.log('-*- 2 Humans -*-')
                    // console.log(pickNumber)
                    pick_1 = ES6_FUNCTIONS_userPick.RUN_userDraftPick(teamUniverse)
                    ++pickNumber
                    // console.log(pickNumber)
                    pick_2 = ES6_FUNCTIONS_userPick.RUN_userDraftPick(teamUniverse)
                break;
            default:
                console.log('ERROR - runDraftTeam')
                break;
        }

pick_1 = new ES6_INHERITANCE_teamObject.MAIN_teamObject(pick_1)
pick_2 = new ES6_INHERITANCE_teamObject.MAIN_teamObject(pick_2)
return [pick_1, pick_2]}

// -*- ES6 EXPORTS -*- //
export default {
    RUN_draftTeam
}

// -*- NODE EXPORTS -*- //
// module.exports = {

// }