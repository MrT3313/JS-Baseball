// -- IMPORTS -- // 
    // Inheritance
    const GAME_INHERITANCE = require('../inheritance/game_inheritance.js')

// -- *** -- //
// -- *** -- //

const createGameObject = (todaysCompetition_array) => {
    const todaysGame = new GAME_INHERITANCE.GameObject({
        gameTime: new Date(),
        eventName: 'First Game',
        weather: 'Sunny',
    })
    todaysGame.activeTeams = todaysCompetition_array
return todaysGame}

// -- EXPORTS -- //'
    module.exports = {
        createGameObject
    }