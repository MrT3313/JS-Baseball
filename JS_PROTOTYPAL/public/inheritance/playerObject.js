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

// === DefaultPlayerObject === //
    /* 
        ES6 exports
        export function MAIN_playerObject()

        Node
        function MAIN_playerObject()
    */

    function MAIN_playerObject(player_attrs) {
        this.firstName = player_attrs.firstName;
        this.lastName = player_attrs.lastName;
        this.number = player_attrs.number;
        this.stats = player_attrs.stats
    }

    // -- Prototype -- //
    MAIN_playerObject.prototype.RUN_swing = () => {
        
    }
    MAIN_playerObject.prototype.RUN_pitch = () => {
        
    }

// - 1 - // Infielder
    function SUB_playerObject_infielder(infield_attrs) {
        MAIN_playerObject.call(this, infield_attrs)
        // --*-- //
        this.position = 'infield'
    }

    // -- Prototype -- //
    SUB_playerObject_infielder.prototype = Object.create(MAIN_playerObject.prototype);

// - 2 - // Outfielder
    function SUB_playerObject_outfielder(outfield_attrs) {
        MAIN_playerObject.call(this, outfield_attrs)
        // --*-- //
        this.position = 'outfield'
    }

    // -- Prototype -- //
    SUB_playerObject_outfielder.prototype = Object.create(MAIN_playerObject.prototype);

// - 3 - // DH
    function SUB_playerObject_dh(dh_attrs) {
        MAIN_playerObject.call(this, dh_attrs)
        // --*-- //
        this.position = 'dh'
    }

    // -- Prototype -- //
    SUB_playerObject_dh.prototype = Object.create(MAIN_playerObject.prototype);

// - 4 - // Pitcher
    function SUB_playerObject_pitcher(pitcher_attrs) {
        MAIN_playerObject.call(this, pitcher_attrs)
        // --*-- //
        this.position = 'pitcher'
    }

    // -- Prototype -- //
    SUB_playerObject_pitcher.prototype = Object.create(MAIN_playerObject.prototype);


// -*- ES6 EXPORTS -*- //
export default {
    MAIN_playerObject,
    SUB_playerObject_infielder,
    SUB_playerObject_outfielder,
    SUB_playerObject_dh,
    SUB_playerObject_pitcher,
}

// -*- NODE EXPORTS -*- //
// module.exports = {
    // MAIN_playerObject,
    // SUB_playerObject_infielder,
    // SUB_playerObject_outfielder,
    // SUB_playerObject_dh,
    // SUB_playerObject_pitcher,
// }