const key = {
    newSegment: '=== ===',
    connectionCheck: '-x-',
    subSegment: '---',
}
console.log(
    'KEY: ',key)
// --*-- //

// -*- IMPORTS -*- //
        // -A- // ES6 Imports
        // - Inheritance - //
        import ES6_INHERITANCE_gameObject from '../inheritance/gameObject.js'
        import ES6_INHERITANCE_teamObject from '../inheritance/teamObject.js'
        import ES6_INHERITANCE_playerObject from '../inheritance/playerObject.js'
        // - Inheritance - //
        import ES6_FUNCTIONS_fillTeamUniverse from '../functions/draftLogic/RUN_fillTeamUniverse.js'
        import ES6_FUNCTIONS_fillPlayerUniverse from '../functions/draftLogic/RUN_fillPlayerUniverse.js'
    // -B- // Node Imports
        // const NODE_INHERITANCE_gameObject = require('../inheritance/gameObject.js')
        // const NODE_INHERITANCE_teamObject = '../inheritance/teamObject.js'
        // const NODE_INHERITANCE_teamObject = '../inheritance/playerObject.js'

// --*-- //
console.log('=== === START SIMULATION === ===')
// alert('Ready Setup Your Game?')

console.log('=== === FILL TEAM UNIVERSE === ===')
    ES6_FUNCTIONS_fillTeamUniverse.fillTeamUniverse()

console.log('=== === FILL PLAYER UNIVERSE === ===')
    ES6_FUNCTIONS_fillPlayerUniverse.fillPlayerUniverse()

console.log('=== === DEFINING PLAYER TYPES === ===')

console.log('=== === DRAFT TEAMS === ===')

console.log('=== === DRAFT PLAYERS === ===')

console.log('=== === START GAME === ===')
    // WHILE inningArray.length > 9
    console.log('=== SETUP INNING LOOP ===')

    // WHILE halfInningArray.length > 2
        console.log('=== SETUP HALF INNING LOOP ===')







