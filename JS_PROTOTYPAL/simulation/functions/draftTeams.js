
// Draft Teams

const draftTeams = (num_human_players, teamUniverse) => {
    // console.log('num_human_players', num_human_players)
    // console.log('teamUniverse', teamUniverse)

    let malleable_draftArray = teamUniverse
    // console.log(malleable_draftArray)
    let result = undefined

    switch(num_human_players) {
        case 'none': 
            console.log('inside case 0')

            result = computerPick(malleable_draftArray)
            gameTeam_1 = result[0]

            console.log(gameTeam_1)
                console.log('=== TEAM 1 ===',gameTeam_1)    

            result = computerPick(result[1])
            gameTeam_2 = result[0]
                console.log('=== TEAM 2 ===',gameTeam_1)    

            return [gameTeam_1,gameTeam_2]
        case 1: 
            console.log('inside case 1')
            alert('We have humbly given you first pick. Please note the humblness.')

            result = userPick(malleable_draftArray)
                gameTeam_1 = result[0]
                console.log('=== TEAM 1 ===',gameTeam_1)
            
            result = computerPick(result[1])
                // console.log(result)

                gameTeam_2 = result[0]
                console.log('=== TEAM 2 ===',gameTeam_2)

            return [gameTeam_1,gameTeam_2]
        case 2:
            console.log('inside case 2')
            result = userPick(malleable_draftArray)
            gameTeam_1 = result[0] 
                console.log('=== TEAM 1 ===',gameTeam_1)    

            result = userPick(result[1])
            gameTeam_2 = result[0]
                console.log('=== TEAM 2 ===',gameTeam_1)    

            return [gameTeam_1,gameTeam_2]
        default: 
            return 'what is going on...'
    }

}
