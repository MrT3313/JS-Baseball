
// Draft Teams
    
// Draft Teams

    const draftTeams = (num_human_players, teamUniverse) => {
        console.log('num_human_players', num_human_players)
        console.log('teamUniverse', teamUniverse)

        let malleable_draftArray = teamUniverse
        let result = undefined

        switch(num_human_players) {
            case 'none': 
                console.log('inside case 0')

                result = computerPick(malleable_draftArray)
                gameTeam_1 = result[0] 
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
                console.log('inside case 0 -- default')
                return 'what is going on...'
        }

    }

    const userPick = (availableTeams) => {
        // console.log('insideUserPick')
        // console.log('availableTeams', availableTeams)

        let userNumberPick = parseInt(prompt(`Pick a number between 1 and ${availableTeams.length}`))        
        let selectedTeam = availableTeams.splice(userNumberPick,1)

    return [selectedTeam, availableTeams]}

    const computerPick = (availableTeams) => {
        // console.log('insideComputerPick')
        // console.log('availableTeams', availableTeams)

        let random = randomNum((availableTeams.length -1), 0)
            // console.log('random', random)

        let selectedTeam = availableTeams.splice(random,1)
    return [selectedTeam, availableTeams]}
 