/* KEY
    === : Parent Object
    - # - : Child Object

*/
// -- *** -- *** -- *** -- *** -- *** -- //
// -- *** -- *** -- *** -- *** -- *** -- //

// === PlayerObject === //
const testPlayer = new PlayerObject({
    name: 'test1',
    number: 11,
}) 
// console.log('testPlayer', testPlayer)
// -- *** -- //

// - 1 - Default -- //
const testDefault = new Default({
    name: 'testDefault',
    number: 13,
    position: 'catcher',
    power: 77
})
// console.log(testDefault)
// -- *** -- //

// - 2 - DH -- //
const testDH = new DH({
    name: 'testDH',
    number: 34, 
    power: 87,       
})
// console.log(testDH)
// -- *** -- //

// - 3 - Pitcher -- //
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
// console.log(testPitcher)
// -- *** -- //