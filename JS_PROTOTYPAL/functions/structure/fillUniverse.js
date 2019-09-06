// -- IMPORTS -- //
    const PLAYER_INHERITANCE = require('../../inheritance/player_inheritance.js')
    const TEAM_INHERITANCE = require('../../inheritance/team_inheritance.js')

// -- *** -- //
// -- *** -- //

// Fill Player Universe
    const fillPlayerUniverse = (pitchers, DBs, defaults) => {
        console.log('-x- PITCHERS -x-',pitchers)
        // - //
        const pitcher_universe = pitchers.map( pitcher => new PLAYER_INHERITANCE.Pitcher (pitcher) )
            console.log('-x- PITCHER UNIVERSE -x-',pitcher_universe)

        const db_universe = DBs.map( dh => new PLAYER_INHERITANCE.DH (dh) )
            console.log('-x- DB UNIVERSE -x-',db_universe)
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
    }
    
    module.exports = functions

// === TESTING === //

