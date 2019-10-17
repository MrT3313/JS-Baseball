
// What Players Are Available To Simulation??

// -- *** -- //
// -- *** -- //

// -- Pitchers -- //
    const pitchers_array = [
        {position: 'pitcher',
            firstName: 'Babe', lastName: 'Ruth',
            number: 3,
            
            power: 100,
            skill: 80,
            speed: 90,
            
            arm: 'right',
        },
        {position: 'pitcher',
            firstName: 'Pedro', lastName: 'Martinez',
            number: 25,
        
            power: 98,
            skill: 82,
            speed: 90,

            arm: 'left',
        },
        {position: 'pitcher',
            firstName: 'Roger', lastName: 'Clemens',
            number: 25,

            power: 98,
            skill: 82,
            speed: 90,

            arm: 'right',
        },
        {position: 'pitcher',
            firstName: 'Cy', lastName: 'Young',
            number: 25,
            
            power: 98,
            skill: 82,
            speed: 90,
            
            arm: 'right',
        },
        {position: 'pitcher',
            firstName: 'Randy', lastName: 'Johnson',
            number: 25,
        
            power: 98,
            skill: 82,
            speed: 90,
        
            arm: 'right',
        },
    ]
// -- *** -- //
// -- *** -- //

// -- DH -- // 
    const dh_array = [
        {position: 'dh',
            firstName: 'David', lastName: 'Ortiz',
            number: 34,

            power: 100,
            skill: 70,
            speed:10,

            arm: 'right',
        },
        {position: 'dh',
            firstName: 'Vladimir', lastName: 'Guerrero',
            number: 27,

            power: 100,
            skill: 70,
            speed:10,

            arm: 'right',
        },
    ]

// -- *** -- //
// -- *** -- //

// -- DEFAULT -- // 
    const infield_array = [
        // -- Comical -- //
        {position: 'infield',
            firstName: 'Mascot', lastName: undefined,
            number: 100,
            
                power: 5,
                skill: 5,
                speed:10,

                arm: 'right',
        },        
        {position: 'infield',
            firstName: 'Bat-Boy', lastName: undefined,
            number: 0,
            
                power: 10,
                skill: 10,
                speed:10,

                arm: 'right',
        },    
        {position: 'infield',
            firstName: 'StreakingFan', lastName: undefined,
            number: -1,
            
                power: 50,
                skill: 0,
                speed:10,

                arm: 'right',
        },          
        // -- Infield -- //
        {position: 'infield',
            firstName: 'Jason', lastName: 'Varitek',
            number: 33,
            
                power: 70,
                skill: 70,
                speed:10,

                arm: 'right',
        },
        {position: 'infield',
            firstName: 'Derek', lastName: 'Jeter',
            number: 2,
            
            power: 80,
            skill: 90,
            speed:10,

            arm: 'right',
        },
        {position: 'infield',
            firstName: 'Reed', lastName: 'Turgeon',
            number: 13,
            
            power: 100,
            skill: 100,
            speed:10,

            arm: 'right',
        },
        {position: 'infield',
            firstName: 'Yogi', lastName: 'Berra',
            number: 99,
            
            power: 70,
            skill: 70,
            speed:10,

            arm: 'right',
        },
        {position: 'infield',
            firstName: 'Albert', lastName: 'Pujols',
            number: 99,
            
            power: 99,
            skill: 80,
            speed:10,

            arm: 'right',
        },
        {position: 'infield',
            firstName: 'Lou', lastName: 'Gehrig',
            number: 99,
            
            power: 70,
            skill: 70,
            speed:10,

            arm: 'right',
            
            
        },
        {position: 'infield',
            firstName: 'Derek', lastName: 'Jeter',
            number: 99,
            
            power: 80,
            skill: 100,
            speed:10,

            arm: 'right',
        },
        {position: 'infield',
            firstName: 'Cal', lastName: 'Ripken Jr.',
            number: 99,
            
            power: 80,
            skill: 100,
            speed:10,

            arm: 'right',
        },
        {position: 'infield',
            firstName: 'Wade', lastName: 'Boggs',
            number: 99,
            
            power: 80,
            skill: 100,
            speed:10,

            arm: 'right',
        },
        {position: 'infield',
            firstName: 'Jackie', lastName: 'Robinson',
            number: 99,
            
            power: 80,
            skill: 100,
            speed:10,

            arm: 'right',
        },
    ]
    
    const outfield_array = [
        // -- Outfield -- //
        {position: 'outfield',
            firstName: 'Manny', lastName: 'Ramirez',
            number: 24,
            
            power: 95,
            skill: 90,
            speed:10,

            arm: 'right',
        },
        {position: 'outfield',
            firstName: 'Ted', lastName: 'Williams',
            number: 9,
            
            power: 95,
            skill: 90,
            speed:10,

            arm: 'right',
        },
        {position: 'outfield',
            firstName: 'Mike', lastName: 'Trout',
            number: 27,
            
            power: 93,
            skill: 93,
            speed:10,

            arm: 'right',
        },
        {position: 'outfield',
            firstName: 'Bryce', lastName: 'Harper',
            number: 34,
            
            power: 93,
            skill: 93,
            speed:10,

            arm: 'right',
        },
        {position: 'outfield',
            firstName: 'Willie', lastName: 'Mays',
            number: 1,
            
            power: 70,
            skill: 70,
            speed:10,

            arm: 'right',
        },
        {position: 'outfield',
            firstName: 'Mickey', lastName: 'Mantle',
            number: 1,
            
            power: 70,
            skill: 70,
            speed:10,

            arm: 'right',
        },
        {position: 'outfield',
            firstName: 'Ken', lastName: 'Griffey Jr.',
            number: 1,
            
            power: 70,
            skill: 70,
            speed:10,

            arm: 'right',
        },
        {position: 'outfield',
            firstName: 'Hank', lastName: 'Aaron',
            number: 1,
            
            power: 70,
            skill: 70,
            speed:10,

            arm: 'right',
        },
    ]

// -- *** -- //
// -- *** -- //

// ES6 EXPORTS
export default {
    infield_array,
    outfield_array,
    pitchers_array,
    dh_array
}
