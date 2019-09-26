
// -- IMPORTS -- //
    const COMPUTER_PICK = require('./draft_computerPick')
    const USER_PICK = require('./draft_userPick')

// -- *** -- //

const draftTeams = (num_human_players, teamUniverse) => {
    // console.log('num_human_players', num_human_players)
    // console.log('teamUniverse', teamUniverse)

    let malleable_draftArray = teamUniverse
        // console.log(malleable_draftArray)
    let result = undefined

    switch(num_human_players) {
        case 'none': 
            console.log('-x- inside case 0')

            result = COMPUTER_PICK.computerPick(malleable_draftArray)
            gameTeam_1 = result[0]
            gameTeam_1.homeTeam = true
                console.log('-x- TEAM 1: ',gameTeam_1)    

            // console.log(result[1])

            result = COMPUTER_PICK.computerPick(result[1])
            gameTeam_2 = result[0]
            gameTeam_2.homeTeam = false
                console.log('-x- TEAM 2: ',gameTeam_2)    

            return [gameTeam_1,gameTeam_2]
        case 1: 
            console.log('-x- inside case 1')
            alert('We have humbly given you first pick. Please note the humblness.')

            result = USER_PICK.userPick(malleable_draftArray)
                gameTeam_1 = result[0]
                gameTeam_1.homeTeam = true
                console.log('-x- TEAM 1: ',gameTeam_1)
            
            result = COMPUTER_PICK.computerPick(result[1])
                // console.log(result)

                gameTeam_2 = result[0]
                gameTeam_2.homeTeam = false
                console.log('-x- TEAM 2: ',gameTeam_2)

            return [gameTeam_1,gameTeam_2]
        case 2:
            console.log('-x- inside case 2')
            result = USER_PICK.userPick(malleable_draftArray)
            gameTeam_1 = result[0] 
            gameTeam_1.homeTeam = true
                console.log('=== TEAM 1: ',gameTeam_1)    

            result = USER_PICK.userPick(result[1])
            gameTeam_2 = result[0]
            gameTeam_2.homeTeam = false
                console.log('-x- TEAM 2: ',gameTeam_2)    

            return [gameTeam_1,gameTeam_2]
        default: 
            return 'what is going on...'
    }
}

// -- EXPORTS -- //
    module.exports = {
        draftTeams
    }
