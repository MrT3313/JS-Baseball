// 1 // Current Inning
    const setCurrent_Inning = (game) => {
        console.log('Inside Set Current Inning')
        let result = undefined
        // - //
            const inningArray_length = game.inningArray.length
            const current_Inning = game.inningArray[inningArray_length - 1]
            result = current_Inning
    return result}

// 2 // Current Half Inning
    const setCurrent_HalfInning = (game) => {
        console.log('Inside Set Current HalfInning')
        let result = undefined
        // - //
            const halfInningArray_length = game.inningArray[
                game.inningArray.length - 1
            ].halfInningArray.length

            const current_halfInning = game.inningArray[game.inningArray.length - 1 ].halfInningArray[
                halfInningArray_length - 1
            ]
            result = current_halfInning
    return result}

// 3 // Current At Bat
    const setCurrent_AtBat = (halfInning) => {
        console.log('Inside Set Current At Bat')
        let result = undefined
        // - //
            const atBatArray_length = halfInning.atBatsArray.length
            const current_atBat = halfInning.atBatsArray[atBatArray_length - 1]
            result = current_atBat
    return result}

// 4 // Current Batter
    const setCurrent_Batter = () => {

    }

// EXPORTS
    module.exports = {
        setCurrent_Inning,
        setCurrent_HalfInning,
        setCurrent_AtBat,
        setCurrent_Batter,
    }