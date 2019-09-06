// -- IMPORTS -- // 
    // Inheritance
        const GAME_INHERITANCE = require('../inheritance/game_inheritance.js')

    // Data 
        const TEAM_UNIVERSE = require('../data/teamUniverse.js')
        const PLAYERS_UNIVERSE = require('../data/playerUniverse.js')
    
    // Functions
        const FILL_UNIVERSE = require('../functions/structure/fillUniverse.js')
        const QUERYUSER_numHumanPlayers = require('../functions/general/queryUser_numPlayers.js')
        const GET_ROSTER = require('../functions/structure/roster.js') 
        const CREATE_GAMEOBJECT = require('../functions/structure/createGameObject.js')
            // console.log('************************',CREATE_GAMEOBJECT)
        const BATTING_ORDER = require('../functions/structure/battingOrder.js')
        const SET_CURRENT = require('../functions/2.0.0/gameLogic/setCurrent.js')
        const CHECK_PITCH_CONDITIONS = require('../functions/2.0.0/gameLogic/checkPitchConditions.js')

        // - Draft -  
        const DRAFT_TEAMS = require('../functions/structure/draftLogic/draftTeams.js')
        const DRAFT_PLAYERS = require('../functions/structure/draftLogic/draftPlayers.js')

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
        const todaysCompetiton = DRAFT_TEAMS.draftTeams(num_human_players, teamUniverse)
            console.log('=============== TodaysCompetiton ===============', todaysCompetiton)

    // - 6 - // Draft Players
        const todaysCompetition_postDraft = DRAFT_PLAYERS.draftPlayers(todaysCompetiton, playerUniverse)
            console.log(todaysCompetition_postDraft)

    // - 7 - // Get Roster
        // Game 1 Roster & Batting Order
            const game_1_roster = GET_ROSTER.Roster(todaysCompetition_postDraft[0])
                // console.log(game_1_roster)
                console.log(game_1_roster.length)
            const game_1_battingOrder = BATTING_ORDER.battingOrder(game_1_roster)
                // console.log(game_1_battingOrder)
                console.log(game_1_battingOrder.length)
        
        // Game 1 Roster & Batting Order
            const game_2_roster = GET_ROSTER.Roster(todaysCompetition_postDraft[1])
                // console.log(game_2_roster)
                console.log(game_2_roster.length)
            const game_2_battingOrder = BATTING_ORDER.battingOrder(game_2_roster)
                // console.log(game_2_battingOrder)
                console.log(game_2_battingOrder.length)

        // overwrite teamPlayers to be single arrray
        todaysCompetition_postDraft[0].teamPlayers = game_1_roster
        todaysCompetition_postDraft[0].battingOrder = game_1_battingOrder
        todaysCompetition_postDraft[1].teamPlayers = game_2_roster
        todaysCompetition_postDraft[1].battingOrder = game_2_battingOrder

    // - 8 - // Start Game
        let todaysGame = CREATE_GAMEOBJECT.createGameObject(todaysCompetition_postDraft)
        // console.log('=============== Todays Game ===============', todaysGame)

    // - 9 - // Start the Game!!
        console.log('=============== PLAY BALL ===============')
        todaysGame.startGame()
        console.log('=============== Todays Game ===============', todaysGame)
    
    // - 10 - // Set Current Inning, HalfInning, AtBat & Batter
        let current_Inning = SET_CURRENT.setCurrent_Inning(todaysGame)
            console.log('Current Inning',current_Inning)

        let current_HalfInning = SET_CURRENT.setCurrent_HalfInning(todaysGame)
            console.log('Current HalfInning',current_HalfInning)

        let current_AtBat = SET_CURRENT.setCurrent_AtBat(current_HalfInning)
            console.log('Current At Bat',current_AtBat)

        let current_Batter = SET_CURRENT.setCurrent_Batter(current_HalfInning, todaysGame.activeTeams)
            console.log('Current Batter',current_Batter)

    // - 11 - // Check Pitch Conditions
        let checkPitchConditions_results = CHECK_PITCH_CONDITIONS.check_pitchConditions(current_AtBat)
            console.log('Pitch Result',checkPitchConditions_results)



        

    // // - ???? - // WHERES THE GAME BRO

    // // n // Ending Message
    //     console.log(` \n \n === === === The players showed up....but there was no structure... === === === \n \n  `)

    // // n + 1 // End Game
    //     todaysGame.gameOver()
    //     console.log(todaysGame)
    