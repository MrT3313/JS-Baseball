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
        this.gameTime = this.formatDate(new Date())
        this.endTime = undefined
        // --*-- //
        this.inningsTeams = []
        this.inningsArray = []
        this.homeTeam = {}
        this.awayTeam = {}
    }

    // -- Prototype -- //
    MAIN_gameObject.prototype.formatDate = function(fullDate) {
        console.log(fullDate)
        let result = `${fullDate.getMonth() + 1}/${fullDate.getDate()}/${fullDate.getFullYear()}`
            console.log(result)
        return result
    }
    MAIN_gameObject.prototype.CHECK_inningsArray = () => {
        
    }
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