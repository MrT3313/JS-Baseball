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
        export function MAIN_gameObject()

        Node
        function MAIN_gameObject()
    */

    function MAIN_gameObject(game_attrs) {
        this.eventName = '!! FIRST GAME !!'
        this.weather = 'Sunny'
        this.gameTime = new Date()
        this.endTime = undefined
        // --*-- //
        this.inningsArray = []
        this.activeTeams = []
    }

    // -- Prototype -- //
    MAIN_gameObject.prototype.CHECK_inningsArray = () => {
        
    }
    // -- * -- //
    MAIN_gameObject.prototype.RUN_startGame = () => {

    }
    MAIN_gameObject.prototype.RUN_makeInning = () => {

    }
    MAIN_gameObject.prototype.RUN_makeHalfInning = () => {

    }
    MAIN_gameObject.prototype.RUN_makeAtBat = () => {

    }
// -*- ES6 EXPORTS -*- //
export default {
    MAIN_gameObject
}

// -*- NODE EXPORTS -*- //
// module.exports = {
//     MAIN_gameObject
// }