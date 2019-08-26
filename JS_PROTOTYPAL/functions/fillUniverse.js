// -- IMPORTS -- //
    const PLAYER_INHERITANCE = require('../inheritance/player_inheritance.js')
    const TEAM_INHERITANCE = require('../inheritance/team_inheritance.js')

// Testing imports and exports with node .js

    const testThisFunction = () => {
        // console.log('this test just happened')
        return 'this test just happened'
    }
//

// -- *** -- //
// -- *** -- //

// Fill Player Universe
    const fillPlayerUniverse = (pitchers, DBs, defaults) => {
    // const fillPlayerUniverse = (pitchers, DBs, defaults) => {
        const pitcher_universe = pitchers.map( pitcher => new PLAYER_INHERITANCE.Pitcher (pitcher) )
        const db_universe = DBs.map( dh => new PLAYER_INHERITANCE.DH (dh) )
        const default_universe = defaults.map( player => new PLAYER_INHERITANCE.Default (player) )

        const itemToReturn = pitcher_universe.concat(db_universe).concat(default_universe)
        // console.log('itemToReturn: ', itemToReturn)
    return itemToReturn}


// Fill Team Universe
        const fillTeamUniverse = (teams) => teams.map( team => new TEAM_INHERITANCE.TeamObject (team) )

// ===  EXPORTS === //

    const functions = {
        fillPlayerUniverse,
        fillTeamUniverse,
        testThisFunction
    }
    
    module.exports = functions

// === TESTING === //

