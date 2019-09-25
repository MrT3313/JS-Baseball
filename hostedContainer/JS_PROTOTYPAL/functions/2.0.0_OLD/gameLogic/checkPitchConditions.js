// Check Pitch Conditions  -> Can I Throw A Pitch??
// True === throw pitch
// False === DONT throw pitch

    const check_pitchConditions = (current_at_bat) => {
        let result = undefined
        // - //
            current_at_bat.pitchCounter.balls <=3 && 
            current_at_bat.pitchCounter.strikes <= 2 
                ? (result = true) : (result = false)
    return result}

// EXPORTS
    module.exports = {
        check_pitchConditions
    }