/* KEY
    === : Parent Object
    - # - : Child Object

*/
// -- *** -- *** -- *** -- *** -- *** -- //
// -- *** -- *** -- *** -- *** -- *** -- //

// === GameObject === //
    const testGame = new GameObject({
        eventName: 'FIRST GAME',
        weather: 'sunny'
    })
    // console.log(testGame)
// -- *** -- //

// === TeamObject === //
    const testTeam = new TeamObject({
        name: 'PICKLERICK',
        homeTeam: true,
    })
    // console.log(testTeam) 

    // -- // -- Test Object Methods -- // -- // 
    testTeam.teamPlayers.outfielders = [1,2,3]
    testTeam.teamPlayers.infielders = [1,2,3,4]
    testTeam.teamPlayers.pitcher = [1]
    // testTeam.checkRoster()
// -- *** -- //
