// Fill Team Universe
    const teamUniverse = teams_array.map( team => new TeamObject (team) )

// Fill Player Universe
    // - 1 - //
        const pitcher_universe = pitchers_Array.map( pitcher => new Pitcher (pitcher) )
        const db_universe = dh_array.map( dh => new DH (dh) )
        const default_universe = default_array.map( player => new Default (player) )

    // - 2 - //
        const playerUniverse = pitcher_universe.concat(db_universe).concat(default_universe)

// -- *** -- //
// -- *** -- //

// === TESTING === //

    if (teamUniverse.length < 2) {
        alert('NOT ENOUGH TEAMS')
    }
    if (pitcher_universe.length < 2) {
        alert("NOT ENOUGH PITCHERS")
    }
    if (db_universe.length < 2) {
        alert("NOT ENOUGH DB")
    }
    if (default_universe.length < 14) {
        alert("NOT ENOUGH DEFAULT PLAYERS")
    }

