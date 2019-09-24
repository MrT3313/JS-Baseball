const key = {
    newSegment: '=== ===',
    subSegment: '---',
    connectionCheck: '-x-',
    functionCheck: '-*-'
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
        // - Function - //
        import ES6_QUERY_numHumanPlayers from '../functions/QUERY_numHumanPlayers.js'
        import ES6_FUNCTIONS_fillTeamUniverse from '../functions/draftLogic/RUN_fillTeamUniverse.js'
        import ES6_FUNCTIONS_fillPlayerUniverse from '../functions/draftLogic/RUN_fillPlayerUniverse.js'
        // - Data - //
        import ES6_DATA_teamUniverse from '../data/teamUniverse.js'
        import ES6_DATA_playerUniverse from '../data/playerUniverse.js'
    // -B- // Node Imports
        // const NODE_INHERITANCE_gameObject = require('../inheritance/gameObject.js')
        // const NODE_INHERITANCE_teamObject = '../inheritance/teamObject.js'
        // const NODE_INHERITANCE_teamObject = '../inheritance/playerObject.js'

// --*-- //
console.log('=== === START SIMULATION === ===')
// alert('Ready Setup Your Game?')

console.log('=== === FILL TEAM UNIVERSE === ===')
const teamUniverse = ES6_FUNCTIONS_fillTeamUniverse.fillTeamUniverse(ES6_DATA_teamUniverse.teams_array)
    console.log('-X- teamUniverse -X-', teamUniverse)  


console.log('=== === FILL PLAYER UNIVERSE === ===')
    // Create Combined Players Array 
    // const players_array = ES6_DATA_playerUniverse.pitchers_array.concat(
    //                     ES6_DATA_playerUniverse.dh_array.concat(
    //                     ES6_DATA_playerUniverse.infield_array.concat(
    //                     ES6_DATA_playerUniverse.outfield_array)))
    // console.log('players_array', players_array)

    // Run fillPlayersUniverse 
    const array_of_playerPositions = [
        ES6_DATA_playerUniverse.pitchers_array,
        ES6_DATA_playerUniverse.dh_array,
        ES6_DATA_playerUniverse.infield_array,
        ES6_DATA_playerUniverse.outfield_array
    ]
    const playerUniverse = ES6_FUNCTIONS_fillPlayerUniverse.fillPlayerUniverse(array_of_playerPositions)
        console.log('-X- playerUniverse -X-', playerUniverse)

console.log('=== === DEFINING PLAYER TYPES === ===')
    const numHumanPlayers = ES6_QUERY_numHumanPlayers.QUERY_numHumanPlayers()
        console.log('-X- numHumanPlayers -X-', numHumanPlayers)
console.log('=== === DRAFT TEAMS === ===')

console.log('=== === DRAFT PLAYERS === ===')

console.log('=== === START GAME === ===')
    // WHILE inningArray.length > 9
    console.log('=== === SETUP INNING LOOP === ===')

    // WHILE halfInningArray.length > 2
        console.log('=== === SETUP HALF INNING LOOP === ===')







