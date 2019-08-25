/* KEY
    === : Parent Object
    - # - : Child Object

- initial testing @ the bottom -- soon to implement more advanced JS testing 

*/
// -- *** -- *** -- *** -- *** -- *** -- //
// -- *** -- *** -- *** -- *** -- *** -- //

// === Game Object === 
function GameObject(game_attrs) {
    this.gameTime = new Date();
    this.eventName = game_attrs.eventName
    this.weather = game_attrs.weather

    // -- prototype -- //
        // Start & Stop //
            GameObject.prototype.startGame = () => {
                console.log('The Game Has Started');
            }
            GameObject.prototype.gameOver = () => {
                console.log('The Game Has Started');
            }

        // Inning Progression
            GameObject.prototype.completed_halfInning = () => {
                console.log('A 1/2 inning has completed')
            }
            GameObject.prototype.completed_inning = () => {
                console.log('A 1/2 inning has completed');
            }
}

    // - 1 - // inning
        function Inning(inning_attrs) {
            GameObject.call(this, inning_attrs)
            this.inningTime = new Date()
        }
    // - 2 - // hanfInning
        function HalfInning(halfInning_attrs) {
            GameObject.call(this, halfInning_attrs)
            this.hanfInningTime = new Date()
        }
// -- *** -- //
// -- *** -- //

// === TESTING === //

    const testGame = new GameObject({
        eventName: 'First Game',
        weather: 'Fuckin Beautiful',
    })
    console.log('TEST GAME: ', testGame)

    // - 1 - // Inning
    const testInning = new Inning({})
    console.log('TEST INNING: ', testInning)

    // - 2 - // Half Inning
    const testHalfInning = new HalfInning({})
    console.log('TEST HALF INNING: ', testHalfInning)