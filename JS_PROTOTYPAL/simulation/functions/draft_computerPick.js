const computerPick = (availableArray) => {
    // console.log('insideComputerPick')
    // console.log('availableTeams', availableTeams)

    let random = randomNum((availableArray.length -1), 0)
        // console.log('random', random)

    let selected = availableArray.splice(random,1)
        // console.log(selectedTeam)

        if (selected[0] === undefined) {
            stop
            debugger

        }

        selected[0].user = 'Computer'
return [selected[0], availableArray]}