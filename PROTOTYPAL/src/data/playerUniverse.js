
// What Players Are Available To Simulation??

// -- *** -- //
// -- *** -- //

// -- Pitchers -- //
    const pitchers_array = [
        {
            firstName: 'Babe', lastName: 'Ruth',
            number: 3,
            stats: {
                power: 100,
                skill: 80,
            },
            arm: 'right',
            pitches: {
                fastball: 90,
            },
            // position: 'pitcher'
        },
        {
            firstName: 'Pedro', lastName: 'Martinez',
            number: 25,
            stats: {
                power: 98,
                skill: 82,
            },
            arm: 'left',
            pitches: {
                fastball: 90,
            },
            // position: 'pitcher'
        },
        {
            firstName: 'Roger', lastName: 'Clemens',
            number: 25,
            stats: {
                power: 98,
                skill: 82,
            },
            arm: 'right',
            pitches: {
                fastball: 90,
            },
            // position: 'pitcher'
        },
        {
            firstName: 'Cy', lastName: 'Young',
            number: 25,
            stats: {
                power: 98,
                skill: 82,
            },
            arm: 'right',
            pitches: {
                fastball: 90,
            },
            // position: 'pitcher'
        },
        {
            firstName: 'Randy', lastName: 'Johnson',
            number: 25,
            stats: {
                power: 98,
                skill: 82,
            },
            arm: 'right',
            pitches: {
                fastball: 90,
            },
            // position: 'pitcher'
        },
    ]
// -- *** -- //
// -- *** -- //

// -- DH -- // 
    const dh_array = [
        {
            firstName: 'David', lastName: 'Ortiz',
            number: 34,
            stats: {
                power: 100,
                skill: 70,
            },
            // position: 'dh'
        },
        {
            firstName: 'Vladimir', lastName: 'Guerrero',
            number: 27,
            stats: {
                power: 100,
                skill: 70,
            },
            // position: 'dh'
        },
    ]

// -- *** -- //
// -- *** -- //

// -- DEFAULT -- // 
    const infield_array = [
        // -- Comical -- //
        {
            firstName: 'Mascot', lastName: undefined,
            number: 100,
            stats: {
                power: 5,
                skill: 5
            },
            // position: 'infield'
        },        
        {
            firstName: 'Bat-Boy', lastName: undefined,
            number: 0,
            stats: {
                power: 10,
                skill: 10
            },
            // position: 'infield'
        },    
        {
            firstName: 'StreakingFan', lastName: undefined,
            number: -1,
            stats: {
                power: 50,
                skill: 0
            },
            // position: 'infield'
        },          
        // -- Infield -- //
        {
            firstName: 'Jason', lastName: 'Varitek',
            number: 33,
            stats: {
                power: 70,
                skill: 70
            },
            // position: 'infield'
        },
        {
            firstName: 'Derek', lastName: 'Jeter',
            number: 2,
            stats: {
                power: 80,
                skill: 90
            },
            // position: 'infield'
        },
        {
            firstName: 'Reed', lastName: 'Turgeon',
            number: 13,
            stats: {
                power: 100,
                skill: 100
            },
            // position: 'infield'
        },
        {
            firstName: 'Yogi', lastName: 'Berra',
            number: 99,
            stats: {
                power: 70,
                skill: 70
            },
            // position: 'infield'
        },
        {
            firstName: 'Albert', lastName: 'Pujols',
            number: 99,
            stats: {
                power: 99,
                skill: 80
            },
            // position: 'infield'
        },
        {
            firstName: 'Lou', lastName: 'Gehrig',
            number: 99,
            stats: {
                power: 70,
                skill: 70
            },
            // position: 'infield'
        },
        {
            firstName: 'Derek', lastName: 'Jeter',
            number: 99,
            stats: {
                power: 80,
                skill: 100
            },
            // position: 'infield'
        },
        {
            firstName: 'Cal', lastName: 'Ripken Jr.',
            number: 99,
            stats: {
                power: 80,
                skill: 100
            },
            // position: 'infield'
        },
        {
            firstName: 'Wade', lastName: 'Boggs',
            number: 99,
            stats: {
                power: 80,
                skill: 100
            },
            // position: 'infield'
        },
        {
            firstName: 'Jackie', lastName: 'Robinson',
            number: 99,
            stats: {
                power: 80,
                skill: 100
            },
            // position: 'infield'
        },
    ]
    
    const outfield_array = [
        // -- Outfield -- //
        {
            firstName: 'Manny', lastName: 'Ramirez',
            number: 24,
            stats: {
                power: 95,
                skill: 90
            },
            // position: 'outfield'
        },
        {
            firstName: 'Ted', lastName: 'Williams',
            number: 9,
            stats: {
                power: 95,
                skill: 90
            },
            // position: 'outfield'
        },
        {
            firstName: 'Mike', lastName: 'Trout',
            number: 27,
            stats: {
                power: 93,
                skill: 93
            },
            // position: 'outfield'
        },
        {
            firstName: 'Bryce', lastName: 'Harper',
            number: 34,
            stats: {
                power: 93,
                skill: 93
            },
            // position: 'outfield'
        },
        {
            firstName: 'Willie', lastName: 'Mays',
            number: 1,
            stats: {
                power: 70,
                skill: 70
            },
            // position: 'outfield'
        },
        {
            firstName: 'Mickey', lastName: 'Mantle',
            number: 1,
            stats: {
                power: 70,
                skill: 70
            },
            // position: 'outfield'
        },
        {
            firstName: 'Ken', lastName: 'Griffey Jr.',
            number: 1,
            stats: {
                power: 70,
                skill: 70
            },
            // position: 'outfield'
        },
        {
            firstName: 'Hank', lastName: 'Aaron',
            number: 1,
            stats: {
                power: 70,
                skill: 70
            },
            // position: 'outfield'
        },
    ]

// -- *** -- //
// -- *** -- //

// -*- ES6 EXPORTS -*- //
export default {
    infield_array,
    outfield_array,
    pitchers_array,
    dh_array
}

// -*- NODE EXPORTS -*- //
// module.exports = {
    infield_array,
    outfield_array,
    pitchers_array,
    dh_array
// }