const computerPick = (availableTeams) => {
    // console.log('insideComputerPick')
    // console.log('availableTeams', availableTeams)

    let random = randomNum((availableTeams.length -1), 0)
        // console.log('random', random)

    let selectedTeam = availableTeams.splice(random,1)
        console.log(selectedTeam)
return [selectedTeam[0], availableTeams]}