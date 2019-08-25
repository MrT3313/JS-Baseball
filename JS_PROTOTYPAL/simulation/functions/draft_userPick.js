const userPick = (availableTeams) => {
    // console.log('insideUserPick')
    // console.log('availableTeams', availableTeams)

    let userNumberPick = parseInt(prompt(`Pick a number between 1 and ${availableTeams.length}`))        
    let selectedTeam = availableTeams.splice(userNumberPick,1)

return [selectedTeam, availableTeams]}