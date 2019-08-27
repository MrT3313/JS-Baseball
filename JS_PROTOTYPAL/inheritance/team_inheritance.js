
const GAME_RULES = require('../config/rules.js')

/* KEY
    === : Parent Object
    - # - : Child Object

*/
// -- *** -- *** -- *** -- *** -- *** -- //
// -- *** -- *** -- *** -- *** -- *** -- //

// === TeamObject ===
    function TeamObject(team_attrs) {
        this.user = team_attrs.user
        this.city = team_attrs.city
        this.name = team_attrs.name
        this.teamPlayers = {
            outfielders: [],
            infielders: [],
            pitchers: [],
            DHs: [],
        },
        this.homeTeam = undefined
        this.battingOrder_currentPosition = 0

    // -- prototype -- //
        TeamObject.prototype.checkRoster = function() {
            // console.log(this.teamPlayers)
            // debugger
            if (
                this.teamPlayers.outfielders.length >= 3 &&
                this.teamPlayers.infielders.length >= 4 &&
                this.teamPlayers.pitchers.length >= 1 &&
                this.teamPlayers.DHs.length >= 1
            ) {
                // console.log(this.teamPlayers)
                // console.log(true)
                return true
            } else {
                // console.log(false)
                return false
            }
        }
        TeamObject.prototype.checkPosition = function(team, position) { 
            // console.log(position)
    
            let gameRules_attribute = undefined;    
            position === 'infielders' ? gameRules_attribute = 'min_infielders' : position === 'outfielders' ? (
                gameRules_attribute = 'min_outfielders') : position === 'pitchers' ? (
                    gameRules_attribute = 'min_pitchers') : position === 'DHs' ? (
                        gameRules_attribute = 'min_DHs') : (console.log('What is going on...')) 
            console.log(`-x- Game Rules Attribute : ${GAME_RULES.GAME_RULES[gameRules_attribute]}`)


            if (
                // team.teamPlayers[`${position}`].length !== 0 && 
                team.teamPlayers[`${position}`].length === GAME_RULES.GAME_RULES[gameRules_attribute]
            ) {
                return true
            } else {
                return false
            }
        }

        TeamObject.prototype.draftTeam = () => {
            console.log('the draft has started')
            
        }
        TeamObject.prototype.quitGame = () => {
            console.log('somebody quit...')
        }
        TeamObject.prototype.managerFreakOut = () => {
            console.log('THE MANAGER HAS FREAKED OUT')
        }
}

// -- *** -- //
// -- *** -- //

// -- EXPORTS -- //
module.exports = {
    TeamObject
}
// -- *** -- //
// -- *** -- //

// === TESTING === //

    const testTeamObject = new TeamObject({
        city: 'testCity',
        name: 'testName',
    })
    console.log('TEST TEAM OBJECT: ',testTeamObject)