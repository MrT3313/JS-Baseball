/* 
    ES6 exports
    export function MAIN_teamObject()

    Node
    function MAIN_teamObject()
*/

const GAME_RULES = {
    min_infielders: 4,
    min_outfielders: 3,
    min_pitchers: 1,
    min_DHs: 1,
    activePitch_BALL_threshold: 40,
    positions: ['infield', 'outfield','pitcher', 'dh']
}
// console.log(GAME_RULES)

// -*- ES6 EXPORTS -*- //
// export default {
//     GAME_RULES
// }

// -*- NODE EXPORTS -*- //
module.exports = {
    GAME_RULES
}