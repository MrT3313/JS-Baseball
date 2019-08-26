// -- IMPORTS -- // 
    // Inheritance
        const GAME_INHERITANCE = require('../inheritance/game_inheritance.js')

    // Data 
        const TEAM_UNIVERSE = require('../data/teamUniverse.js')
        const PLAYERS_UNIVERSE = require('../data/playerUniverse.js')
    
    // Functions
        const FILL_UNIVERSE = require('../functions/fillUniverse.js')
        const QUERYUSER_numHumanPlayers = require('../functions/queryUser_numPlayers.js')

        // - Draft -  
        const DRAFT_TEAMS = require('../functions/draftTeams.js')
        const DRAFT_PLAYERS = require('../functions/draftPlayers.js')

// -- *** -- //
// -- *** -- START CODE -- *** -- //
console.log('============================== END OF TESTING ==============================')
console.log('============================== STARTING SIMULATION 0.0.0 ==============================')

    // - 1 - // Fill Universe
        const playerUniverse = FILL_UNIVERSE.fillPlayerUniverse(PLAYERS_UNIVERSE.pitchers_Array, PLAYERS_UNIVERSE.dh_array, PLAYERS_UNIVERSE.default_array)
            // console.log('PLAYER UNIVERSE: ', playerUniverse)

        const teamUniverse = FILL_UNIVERSE.fillTeamUniverse(TEAM_UNIVERSE)
            // console.log('TEAM UNIVERSE: ', teamUniverse)

    // - 2 - // User Starts Game
        // alert('Ready Setup Your Game?')
            console.log('=============== GAME SETUP HAS STARTED ============================== ')

    // - 3 - // Query For Number Of Users
        // let num_human_players = queryUser_numPlayers() // remove number to trigger user prompt
        let num_human_players = QUERYUSER_numHumanPlayers.queryUser_numPlayers('0') // remove number to trigger user prompt
        const num_simulated_players = 2 - num_human_players

        if (num_human_players === 0) {
            num_human_players = 'none' 
        }

    // - 5 - // Draft Teams 
        const TodaysCompetiton = DRAFT_TEAMS.draftTeams(num_human_players, teamUniverse)
            console.log('=============== TodaysCompetiton ===============', TodaysCompetiton)

    // - 6 - // Draft Players
        const TodaysCompetition_postDraft = DRAFT_PLAYERS.draftPlayers(TodaysCompetiton, playerUniverse)

    // - 7 - // Verify Full Teams

    // - 8 - // Make Game Object
        const todaysGame = new GAME_INHERITANCE.GameObject({
            gameTime: new Date(),
            eventName: 'First Game',
            weather: 'Sunny',
        })
        todaysGame.activeTeams = TodaysCompetition_postDraft
        console.log(todaysGame)

    // - ???? - // WHERES THE GAME BRO

    // n // Ending Message
        console.log(` \n \n === === === The players showed up....but there was no structure... === === === \n \n  `)

    // n + 1 // End Game
        todaysGame.gameOver()
        console.log(todaysGame)
    