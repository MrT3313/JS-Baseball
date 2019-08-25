
const makeTeamObjects = (num_of_human_players) => {
    // console.log('inside makeTeamObjects')
    // console.log(num_of_human_players)
    // console.log(typeof num_of_human_players)


    if (num_of_human_players === 0) {
        // console.log('0 human user')
        const gameTeam_1 = new TeamObject({
            user: 'Computer', city: undefined, name: undefined,
        })

        const gameTeam_2 = new TeamObject({
            user: 'Computer', city: undefined, name: undefined,
        })
    return [gameTeam_1, gameTeam_2]
    } else if (num_of_human_players === 1)  {
        // console.log('1 human user')

        const gameTeam_1 = new TeamObject({
            user: 'User', city: undefined, name: undefined,
        })

        const gameTeam_2 = new TeamObject({
            user: 'Computer', city: undefined, name: undefined,
        })
    return [gameTeam_1, gameTeam_2]
    } else if (num_of_human_players === 2)  {
        // console.log('2 human user')

        const gameTeam_1 = new TeamObject({
            user: 'User', city: undefined, name: undefined,
        })

        const gameTeam_2 = new TeamObject({
            user: 'User', city: undefined, name: undefined,
        })
    return [gameTeam_1, gameTeam_2]
    } else {
        console.log("oops we dont have a use case for that")
    }
// console.log(gameTeam_1)
// console.log(gameTeam_1)
}


