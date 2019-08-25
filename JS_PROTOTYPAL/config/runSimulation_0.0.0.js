console.log('=== STARTING SIMULATION 0.0.0 ===')

// - 1 - // Fill Universe
    const playerUniverse = fillPlayerUniverse(pitchers_Array, dh_array, default_array)
        console.log('PLAYER UNIVERSE: ', playerUniverse)

    const teamUniverse = fillTeamUniverse(teams_array)
        console.log('TEAM UNIVERSE: ', teamUniverse)

// - 2 - // User Starts Game
    // alert('Ready Setup Your Game?')
        console.log('=== GAME SETUP HAS STARTED == ')

// - 3 - // Query For Number Of Users
    // let num_human_players = queryUser_numPlayers() // remove number to trigger user prompt
    let num_human_players = queryUser_numPlayers('0') // remove number to trigger user prompt
    const num_simulated_players = 2 - num_human_players

    if (num_human_players === 0) {
        num_human_players = 'none' 
    }

// - 5 - // Draft Teams 
    const TodaysCompetiton = draftTeams(num_human_players, teamUniverse)
        console.log('=== TodaysCompetiton ===', TodaysCompetiton)

// - 6 - // Draft Players
    // draftPlayers(num_human_players, TodaysCompetiton, playerUniverse)