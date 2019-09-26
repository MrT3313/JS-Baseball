// -*- IMPORTS -*- //
    // -1- // RULES
        // -A- // ES6 Imports
        import ES6_gameRules from '../config/rules.js.js'
        // -B- // Node Imports
        // const NODE_gameRules = require('../config/rules.js')

// -*- KEY -*- //
    /* 
        ===     : Main Object
        - # -   : Sub Object
    */

// === GameObject === //
    /* 
        ES6 exports
        export function MAIN_teamObject()

        Node
        function MAIN_teamObject()
    */

    function MAIN_teamObject(team_attrs) {
        this.city = team_attrs.city
        this.name = team_attrs.name
        this.user = team_attrs.user
        // --*-- //
        this.homeTeam = undefined
        this.teamPlayers = []
        this.battingOrder_index = 0
    }

    // -- Prototype -- //
    MAIN_teamObject.prototype.CHECK_Roster = function() {
        console.log('-X- inside CHECK_roster -X-')
        const positions = ['infield', 'outfield', 'dh', 'pitcher']
        let HELPER_positionArray = []
        let HELPER_ruleCheckVariable = undefined 
        let resultCount = 0
        // -- * -- //
        positions.forEach(position => {
            // console.log(position)

            HELPER_positionArray = this.teamPlayers.filter(player => player.position === position)
            // console.log(HELPER_positionArray)
            // console.log(HELPER_positionArray.length)
            
            // -- * -- //
            if (position === 'infield'){
                HELPER_ruleCheckVariable = 'min_infielders' 
            } else if (position === 'outfield'){
                HELPER_ruleCheckVariable = 'min_outfielders'
            } else if (position === 'dh'){
                HELPER_ruleCheckVariable = 'min_DHs' 
            } else if (position === 'pitcher'){
                HELPER_ruleCheckVariable = 'min_pitchers' 
            } else {
                console.log(position)
                console.log('ERROR')
            }

            if (
                HELPER_positionArray.length < ES6_gameRules.GAME_RULES[HELPER_ruleCheckVariable]
            ) {
                // console.log('shit -- breaking', HELPER_ruleCheckVariable, 'rule')
                ++resultCount
                // console.log(resultCount)
            }
            // console.log(HELPER_positionArray)
        })

    // - * - // The Return 
    if (resultCount > 0) {
        let result = false
        return result
    } else {
        let result = true
        return result
    }}

    MAIN_teamObject.prototype.CHECK_Position = function(position) {
        console.log('-X- inside CHECK_Position -X-')
        console.log(this)
        // console.log(position)
        let CHECK_rulesCheck = undefined
        let CHECK_filteredArrayByPosition = undefined
        let HELPER_ruleCheckVariable = undefined
        // -- * -- //
            if (position === 'infield'){
                HELPER_ruleCheckVariable = 'min_infielders' 
            } else if (position === 'outfield'){
                HELPER_ruleCheckVariable = 'min_outfielders'
            } else if (position === 'dh'){
                HELPER_ruleCheckVariable = 'min_DHs' 
            } else if (position === 'pitcher'){
                HELPER_ruleCheckVariable = 'min_pitchers' 
            } else {
                console.log(position)
                console.log('ERROR')
            }
        // -- * -- //
        CHECK_rulesCheck = ES6_gameRules.GAME_RULES[HELPER_ruleCheckVariable]
            console.log('CHECK_rulesCheck', CHECK_rulesCheck)
        CHECK_filteredArrayByPosition = this.teamPlayers.filter(player => player.position === position)
            console.log('CHECK_filteredArrayByPosition', CHECK_filteredArrayByPosition)
    // -- * -- // The Return
    if (CHECK_filteredArrayByPosition.length < CHECK_rulesCheck) {
        let result = false
        return result
    } else {
        let result = true
        return result
    }}
    // --*-- //
    MAIN_teamObject.prototype.RUN_draftTeam = function() {

    }
    MAIN_teamObject.prototype.RUN_quitGame = function() {
        
    }
    // --*-- // Fun
    MAIN_teamObject.prototype.RUN_managerFreakOut = function() {

    }

// -*- ES6 EXPORTS -*- //
export default {
    MAIN_teamObject
}

// -*- NODE EXPORTS -*- //
// module.exports = {
//     MAIN_teamObject
// }