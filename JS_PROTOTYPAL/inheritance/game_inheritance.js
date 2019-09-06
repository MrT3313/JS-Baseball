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
                // this.makeHalfInning()
                // this.makeAtBat()

            }
        // Make Inning //
            GameObject.prototype.makeInning = () => {
                // console.log('Inside Make Inninng')
                const newInning = new Inning(this)
                this.inningArray.push(newInning)

                this.makeHalfInning()
                // this.makeAtBat()
            }
        // Make HalfInning //
            GameObject.prototype.makeHalfInning = () => {
                // console.log('Inside Make HalfInning')
                let halfInning_label = undefined
                // - //

                if (this.inningArray[this.inningArray.length -1].halfInningArray.length === 0){
                    halfInning_label = 'top'
                } else if (
                    (this.inningArray[this.inningArray.length -1].halfInningArray.length % 2) !== 0
                ) {
                    halfInning_label = 'top'
                } else if (
                    (this.inningArray[this.inningArray.length -1].halfInningArray.length % 2) === 0
                ) {
                    halfInning_label = 'bottom'
                }


                const newHalfInning = new HalfInning(halfInning_label)
                console.log('--- New Half Inning ---', newHalfInning)
                this.inningArray[this.inningArray.length -1].halfInningArray.push(newHalfInning)

                this.makeAtBat()
            }

        // Make At Bat // 
            GameObject.prototype.makeAtBat = () => {
                const newAtBat = new AtBat(this)
                console.log('--- New At Bat ---', newAtBat)
                this.inningArray[this.inningArray.length -1].halfInningArray[
                    this.inningArray[this.inningArray.length -1].halfInningArray.length - 1
                ].atBatsArray.push(newAtBat)
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
            this.top_bottom = undefined
        return this}

        // -- Inning prototype -- //
            Inning.prototype = Object.create(GameObject.prototype);
                /* 
                    You will always be in an active inning so the HalfInning does not need to take the parent GameObject's prototype
                */
            
    // - 2 - // halfInning
        function HalfInning(halfInning_attrs) {
            // GameObject.call(this, halfInning_attrs)
            console.log('==========', this)
            this.halfInningTime = new Date()
            this.outs = 0
            this.atBatsArray = []
            this.top_bottom = halfInning_attrs
        }
        // -- Half Inning Prototype -- //
            HalfInning.prototype.checkOuts = () => {
                console.log('this', this)
                
            }
        

    // - 3 - // atBat
        function AtBat(atBat_attrs) {
            console.log('--- Starting At Bat ---')
            this.AtBatTime = new Date()
            this.pitchCounter = {
                balls: 0,
                strikes: 0,
            }
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