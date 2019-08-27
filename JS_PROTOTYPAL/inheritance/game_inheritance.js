/* KEY
    === : Parent Object
    - # - : Child Object

- initial testing @ the bottom -- soon to implement more advanced JS testing 

*/
// -- *** -- *** -- *** -- *** -- *** -- //
// -- *** -- *** -- *** -- *** -- *** -- //

// === Game Object === 
function GameObject(game_attrs) {
    this.gameTime = game_attrs.gameTime
    this.endTime = game_attrs.endTime
    this.eventName = game_attrs.eventName
    this.weather = game_attrs.weather
    this.inningArray = []

    // -- Game Object prototype -- //
        // Start Game //
            GameObject.prototype.startGame = () => {
                this.makeInning()
                this.makeHalfInning()
            }
        // Make Inning //
            GameObject.prototype.makeInning = () => {
                // console.log('Inside Make Inninng')

                newInning = new Inning(this)
                this.inningArray.push(newInning)
            }
        // Make HalfInning //
            GameObject.prototype.makeHalfInning = () => {
                // console.log('Inside Make HalfInning')

                newHalfInning = new HalfInning(this)
                this.inningArray[this.inningArray.length -1].halfInningArray.push(newHalfInning)
            }
}
    // - 1 - // inning
        function Inning(inning_attrs) {
            /* 
                uncomment `.call()` to be able to get ALL game data for ANY inning
            */ 
            // GameObject.call(this, inning_attrs) 
            this.inningTime = new Date()
            this.halfInningArray = []
        return this}

        // -- Inning prototype -- //
            Inning.prototype = Object.create(GameObject.prototype);
                /* 
                    You will always be in an active inning so the HalfInning does not need to take the parent GameObject's prototype
                */
            
    // - 2 - // hanfInning
        function HalfInning(halfInning_attrs) {
            // GameObject.call(this, halfInning_attrs)
            this.halfInningTime = new Date()
        }
// -- *** -- //
// -- *** -- //

// -- EXPORTS -- //
    module.exports = {
        GameObject,
        Inning,
        HalfInning
    }
// -- *** -- //
// -- *** -- //

// === TESTING === //

    const testGame = new GameObject({
        eventName: 'First Game',
        weather: 'Fuckin Beautiful',
    })
    // console.log('TEST GAME: ', testGame)

    // - 1 - // Inning
    const testInning = new Inning({})
    // console.log('TEST INNING: ', testInning)

    // - 2 - // Half Inning
    const testHalfInning = new HalfInning({})
    // console.log('TEST HALF INNING: ', testHalfInning)