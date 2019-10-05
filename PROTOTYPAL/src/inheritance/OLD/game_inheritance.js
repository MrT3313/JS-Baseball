// IMPORTS
const GAME_RULES = require('../../config/rules.js')

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
        // - 1 - // Start Game
            GameObject.prototype.startGame = () => {
                this.makeInning()
                // this.makeHalfInning()
                // this.makeAtBat()

            }
        // Make Inning //
            GameObject.prototype.makeInning = () => {
                // - 1 - // Make Inning
                const newInning = new Inning(this)
                this.inningArray.push(newInning)

                // - 2 - // Make Half Inning 
                /*  
                    Upon every new INNING made you will ALWAYS 
                    need to add a first half inning
                */
                this.makeHalfInning()
                /*  
                    Upon every new HALF_INNING made you will ALWAYS 
                    need to add a first ATBAT
                */
                // this.makeAtBat()
            }
        // Make HalfInning //
            GameObject.prototype.makeHalfInning = () => {
                // console.log('Inside Make HalfInning')
                let halfInning_label = undefined
                // - //

                if (
                        this.inningArray[this.inningArray.length -1].halfInningArray.length === 0 ||
                        (this.inningArray[this.inningArray.length -1].halfInningArray.length % 2) !== 0
                    ){
                    halfInning_label = 'top'
                } else if (
                    (this.inningArray[this.inningArray.length -1].halfInningArray.length % 2) === 0
                ) {
                    halfInning_label = 'bottom'
                } else {
                    console.log('What is going on...')
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
        }

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
            this.atBatTime = new Date()
            this.pitchCounter = {
                balls: 0,
                strikes: 0,
            }
        }
        // -- AtBat Prototype -- //
            AtBat.prototype.pitchResult = (current_AtBat, active_Pitch, active_Swing) => {
                console.log('pitchResult')
                console.log(current_AtBat)
                const BALL_Threshold = GAME_RULES.GAME_RULES.activePitch_BALL_threshold
                    console.log(BALL_Threshold)


                if (active_Pitch < BALL_Threshold) {
                    console.log('BALL')
                    current_AtBat.pitchCounter.balls += 1
                }

                if (active_Pitch < active_Swing) {
                    console.log('CONTACT')

                    const contactResult = active_Swing / active_Pitch - 1
                        console.log(contactResult)

                    if (
                            (contactResult) >= .0 &&
                            (contactResult) < .5 
                        ) {
                        console.log('SINGLE')
                    }
                    if (
                            (contactResult) >= .5 &&
                            (contactResult) < .75 
                        ) {
                        console.log('DOUBLE')
                    }
                    if (
                            (contactResult) >= .75 &&
                            (contactResult) < 1 
                        ) {
                        console.log('TRIPLE')
                    }
                    if (
                            (contactResult) >= 1 
                        ) {
                        console.log('HOME RUN')
                    }
                }

                if (active_Pitch > BALL_Threshold) {
                    console.log('STRIKE')
                    current_AtBat.pitchCounter.strikes += 1
                }

            return current_AtBat}

            AtBat.prototype.checkPitchCount = () => {
                
            }
    
    // - 4 - // activeFielders
        function Active_Fielders() {

        }

    // - 5 - // activeBaseRunners
        function Active_BaseRunners() {

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