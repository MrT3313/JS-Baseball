
// Fill Player Universe
    const fillPlayerUniverse = (pitchers, DBs, defaults) => {
        const pitcher_universe = pitchers.map( pitcher => new Pitcher (pitcher) )
        const db_universe = DBs.map( dh => new DH (dh) )
        const default_universe = defaults.map( player => new Default (player) )

        const itemToReturn = pitcher_universe.concat(db_universe).concat(default_universe)
        // console.log('itemToReturn: ', itemToReturn)
    return itemToReturn}


// Fill Team Universe
        const fillTeamUniverse = (teams) => teams.map( team => new TeamObject (team) )

// ===  EXPORTS === //
    module.exports = fillPlayerUniverse

// === TESTING === //

