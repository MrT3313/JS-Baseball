// -*- IMPORTS -*- //
    // -1- // RULES
        // -A- // ES6 Imports
        import ES6_gameRules from '../config/rules.js'
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
        this.user = team_attrs.user
        this.city = team_attrs.city
        this.name = team_attrs.name
        // --*-- //
        this.homeTeam = undefined
        this.teamPlayers = []
        this.battingOrder_index = 0
    }

    // -- Prototype -- //
    MAIN_teamObject.prototype.CHECK_Roster = () => {
        
    }
    MAIN_teamObject.prototype.CHECK_Position = () => {

    }
    // --*-- //
    MAIN_teamObject.prototype.RUN_draftTeam = () => {

    }
    MAIN_teamObject.prototype.RUN_quitGame = () => {
        
    }
    // --*-- // Fun
    MAIN_teamObject.prototype.RUN_managerFreakOut = () => {

    }

// -*- ES6 EXPORTS -*- //
export default {
    MAIN_teamObject
}

// -*- NODE EXPORTS -*- //
// module.exports = {
//     MAIN_teamObject
// }