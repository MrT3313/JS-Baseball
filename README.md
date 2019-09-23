# Welcome To JS Baseball 

Lets talk baseball!

More specifically lets use JS to simulate some baseball!!

More specifically lets use this simulated baseball project to show the differences between _prototypal_ inheritance & _JS classes_!!!

<hr>

## Versions
### -x- Live Version -x- 1.0.0 

### -x- Hello World -x- 0.0.0
- Prototypal Inheritance Structure
- Team Universe & Player Universe
- Player Draft & Team Draft
- Starting & Ending of Game




## Planned Inheritance:

### Game Inheritance

```
Game Object:
    { 
        eventName = attrs,
        weather = attrs,
        -- * --
        gameTime = attrs,
        endTime = attrs,
        -- * --
        inningsArray = []
    } 

    - Prototype -
        CHECK_InningsArray()
        -- * --
        RUN_startGame()
        RUN_makeInning() 
        RUN_makeHalfInning()
        RUN_makeAtBat()
```
```
Inning Object:
    {
        inningTime = new Date(),
        halfInningsArray = []
    }

    - Prototype -
        _GameObject_
        CHECK_HalfInningsArray()
```
```
Half Inning Object:
    {
        halfInningTime = new Date(),
        outs = 0,
        top_bottom = attrs
        atBatsArray = []
    }

    - Prototype - 
        CHECK_Outs()
```
```
At Bat Object:
    {
        atBatTime = new Date()
        pitchCounter = {
            balls: 0, 
            strikes: 0
        }
    }
    - Prototype -
        CHECK_PitchCount()
        -- * --
        GET_pitchResult()
```

### Team Object
```
Team Object
    {
        homeTeam = attrs,
        user = attrs,
        city  = attrs,
        name  = attrs,
        teamPlayers = [],
        battingOrder_index = 0 

    }
    - Prototype -
        CHECK_Roster()
        CHECK_Position()
        -- * --
        RUN_draftTeam()
        RUN_managerFreakOut
        RUN_quitGame()
```

### Player Object
```
Default Player Object:
    {
        firstName = attrs,
        lastName = attrs,
        number = attrs,
        stats = attrs,
    }
    - Prototype -
        RUN_swing()
        RUN_pitch()
```
```
DH Object:
    {
        _DefaultPlayerObject_
        position = 'DH',
    }
    - Prototype -
        _DefaultPlayerObject_
```
```
Pitcher Object:
    {
        _DefaultPlayerObject_
        position: 'pitcher'
    }
    - Prototype -
        _DefaultPlayerObject_
```
<hr>
Author: Reed Turgeon