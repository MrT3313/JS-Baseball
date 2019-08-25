console.log('=== STARTING SIMULATION 0.0.0 ===')

// - 1 - // Fill Universe
    const playerUniverse = fillPlayerUniverse(pitchers_Array, dh_array, default_array)
        console.log('PLAYER UNIVERSE: ', playerUniverse)

// - 2 - // User Starts Game
    // alert('Ready Setup Your Game?')
        console.log(' === GAME SETUP HAS STARTED == ')

// - 3 - // Create Team Objects
    const num_human_players = queryUser_numPlayers('0') // remove number to trigger user prompt
    const num_simulated_players = 2 - num_human_players

// - 4 - // Draft Players

    