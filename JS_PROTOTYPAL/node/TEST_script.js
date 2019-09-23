// -*- IMPORTS -*- //
    // -1- // INHERITANCE
        // -A- // ES6 Imports
            import ES6_INHERITANCE_gameObject from '../inheritance/gameObject.js'
            import ES6_INHERITANCE_teamObject from '../inheritance/teamObject.js'
            import ES6_INHERITANCE_playerObject from '../inheritance/playerObject.js'
        // -B- // Node Imports
            // const NODE_INHERITANCE_gameObject = require('../inheritance/gameObject.js')
            // const NODE_INHERITANCE_teamObject = '../inheritance/teamObject.js'
            // const NODE_INHERITANCE_teamObject = '../inheritance/playerObject.js'

// -*- TEST DATA -*- //
    // -1- // Test Game
        const testTemplate_gameObject = {
            eventName: 'testEventName',
            weather: 'testWeather',
            gameTime: 'testGameTime',
            endTime: 'testEndTime',
            // --*-- //
            inningsArray: []
        }
        // console.log('testTemplate_gameObject', testTemplate_gameObject)

    // -2- // Test Team    
        const testTemplate_teamObject = {
            user: 'testUser',
            city: 'testCity',
            name: 'testName',
            // --*-- //
            homeTeam: undefined,
            teamPlayers: [],
            battingOrder_index: 0
        }
        // console.log('testTemplate_teamObject', testTemplate_teamObject)
    
    // -3- // Test Player
        const testTemplate_Player = {
            firstName: 'testName',
            lastName: 'lastName',
            number: 33,
            stats: {
                power: 100,
                speed: 100,
                skill: 100
            }
        }
        // console.log('testTemplate_Player', testTemplate_Player)

// -*- TESTS -*- //
    // -1- // INHERITANCE
        // -A- // ES6 Imports
            const ES6_testGame = new ES6_INHERITANCE_gameObject.MAIN_gameObject(testTemplate_gameObject)
                console.log('ES6_testGame', ES6_testGame)
            const ES6_testTeam = new ES6_INHERITANCE_teamObject.MAIN_teamObject(testTemplate_teamObject)
                console.log('ES6_testTeam', ES6_testTeam)
            const ES6_testPlayer = new ES6_INHERITANCE_playerObject.MAIN_playerObject(testTemplate_Player)
                console.log('ES6_testPlayer', ES6_testPlayer)
        
            
        // -B- // Node Imports
            // const NODE_testGame = new NODE_INHERITANCE_gameObject.MAIN_gameObject(testTemplate_teamObject)
                // console.log('NODE_testGame', NODE_testGame)