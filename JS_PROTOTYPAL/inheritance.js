/* === Game Object === 

*/
    function GameObject(attrs) {
        this.date = new Date()
        this.eventName = attrs.eventName;
        this.weather = attrs.weather;
    }

    // -- Testing -- //
    const testGame = new GameObject({
        eventName: 'FIRST GAME',
        weather: 'sunny'
    })
    console.log(testGame)
// -- *** -- //
// -- *** -- //

/* TeamObject
    
*/
    function TeamObject(team_attrs) {
        this.name = team_attrs.name
        this.homeTeam = team_attrs.homeTeam // bool 
        this.teamPlayers = {
            outfielders: [],
            infielders: [],
            pitchers: [],
        }
    }

    // -- prototype -- //
    TeamObject.prototype.checkRoster = function() {
        if (
            this.teamPlayers.outfielders.length >= 3 &&
            this.teamPlayers.infielders.length >= 4 &&
            this.teamPlayers.pitcher.length >= 1
        ) {
            console.log("min FILLED")
        } else {
            console.log('NOT filled')
        }
    }

    // -- Test Object Constructor -- //
        const testTeam = new TeamObject({
            name: 'PICKLERICK',
            homeTeam: true,
        })
        console.log(testTeam)

    // -- Test Object Methods 
        testTeam.teamPlayers.outfielders = [1,2,3]
        testTeam.teamPlayers.infielders = [1,2,3,4]
        testTeam.teamPlayers.pitcher = [1]
        testTeam.checkRoster()

// -- *** -- //
// -- *** -- //

/* PlayerObject

*/
    function PlayerObject(player_attrs) {
        this.name = player_attrs.name;
        this.number = player_attrs.number;
    }

    // -- Player Types -- //
    // -- // -- Pitcher -- // -- //
        function Pitcher(pitcher_attrs) {
            PlayerObject.call(this, pitcher_attrs)
            this.position = 'Pitcher'
            this.arm = pitcher_attrs.arm
            this.pitches = pitcher_attrs.pitches
        }

    // -- // -- DH -- // -- //
        function DH(dh_attrs) {
            PlayerObject.call(this, dh_attrs)
            this.position = 'DH',
            this.power = dh_attrs.power
        }

    // -- // -- Default -- // -- //
        function Default(default_attrs) {
            PlayerObject.call(this, default_attrs)
            this.position = default_attrs.position
            this.power = default_attrs.power
        }




    // -- Test PlayerObject -- //
    const testPlayer = new PlayerObject({
        name: 'test1',
        number: 11,
    }) 
    console.log('testPlayer', testPlayer)
    
    // - 1 - // Pitcher // -- // 
    const testPitcher = new Pitcher({
        name: 'testPitcher',
        number: 33,
        arm: 'right',
        pitches: {
            fastball: {
                max: 96
            }, // ...
            // -- more pitches on future releases
        }
    })
    console.log(testPitcher)
    
    // - 2 - // DH // -- // 
    const testDH = new DH({
        name: 'testDH',
        number: 34, 
        power: 87,       
    })
    console.log(testDH)

    // - 3 - // Default // -- // 
    const testDefault = new Default({
        name: 'testDefault',
        number: 13,
        position: 'catcher',
        power: 77
    })
    console.log(testDefault)

