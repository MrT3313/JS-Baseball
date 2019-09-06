/* KEY
    === : Parent Object
    - # - : Child Object

- initial testing @ the bottom -- soon to implement more advanced JS testing 

*/
// -- *** -- *** -- *** -- *** -- *** -- //
// -- *** -- *** -- *** -- *** -- *** -- //

// === PlayerObject === //



    function PlayerObject(player_attrs) {
        this.firstName = player_attrs.firstName;
        this.lastName = player_attrs.lastName;
        this.number = player_attrs.number;
        this.stats = player_attrs.stats

        // -- Prototype -- //
            PlayerObject.prototype.swing = () => {
                console.log('swing')
            }
                /* 
                    All players need to be abel to hit and field -- only pitchers need to be able to pitch
                */
    }

    // - 1 - // -- Default -- //
        function Default(default_attrs) {
            PlayerObject.call(this, default_attrs)
            this.position = default_attrs.position
        }

        // -- Prototype -- //
            Default.prototype = Object.create(PlayerObject.prototype);

    // - 2 - // -- DH -- //
        function DH(dh_attrs) {
            PlayerObject.call(this, dh_attrs)
            this.position = 'DH'
        }

        // -- Prototype -- //
            DH.prototype = Object.create(PlayerObject.prototype);

    // - 3 - // -- Pitcher -- //
        function Pitcher(pitcher_attrs) {
            PlayerObject.call(this, pitcher_attrs)
            this.position = 'pitcher'
            this.arm = pitcher_attrs.arm
            this.pitches = pitcher_attrs.pitches
        }

        // -- Prototype -- //
            /* 
                ONLY pitchers will ever pitch -> pitchers 'never tire' 
                -> in the future implement fatigue and fielders w/ terrible stats pitching 
            */ 
            
            Pitcher.prototype.pitch = () => {
                console.log('pitch')
            }

// -- EXPORTS -- //
    module.exports = {
        PlayerObject,
        Default,
        DH,
        Pitcher
    }
// -- *** -- //
// -- *** -- //

// === TESTING === //

    const testPlayerObject = new PlayerObject({
        firstName: 'testPlayer',
        lastName: 'testPlayer',
        number: 0,
        stat: {
            power: 0,
            skill: 0
        }
    })
    console.log('TEST PLAYER OBJECT: ', testPlayerObject)

    // - 1 - // Default
    const testDefault = new Default({
        position: 'ANYTHING'
    })
    console.log('TEST DEFAULT PLAYER: ', testDefault)
    
    // - 2 - // DH
    const testDH = new DH({})
    console.log('TEST DH: ', testDH)
    
    // - 3 - // Pitcher
    const testPitcher = new Pitcher({})
    console.log('TEST PITCHER: ', testPitcher)