// -- IMPORTS -- //
    const RANDOM_NUMBER = require('../functions/randomNumGen.js')

// -- *** -- //

const computerPick = (availableArray) => {
    // console.log('insideComputerPick')
    // console.log('availableTeams', availableTeams)
    console.log('-x-', availableArray.length)

    let max = availableArray.length - 1

    let random = RANDOM_NUMBER.randomNum(max, 0)
        // console.log('random', random)

    let selected = availableArray.splice(random,1)
        // console.log(selected)

        if (availableArray.includes(selected)) {
            console.log('!!! ERROR !!!')
        }

        selected[0].user = 'Computer'
return [selected[0], availableArray]}

// -- EXPORTS -- //
    module.exports = {
        computerPick   
    }