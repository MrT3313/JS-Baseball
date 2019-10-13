// IMPORTS
    import React from 'react'
    import {connect} from 'react-redux'
    import styled from 'styled-components'
// IMPORT ACTION CREATORS
    import {a_fullUniverse} from '../redux/actions/a_fillUniverse.js'

// 

// STYLED COMPONENTS
const GameDisplay_Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 10px;
    padding: 10px;

    border-radius: 10px;
    border: 1px solid black
`;
// COMPONENT TO EXPORT
function GameDisplay({activeGame, a_fullUniverse}) {
    // console.log(props)
    console.log(activeGame)
    // console.log(props.activeGame)
    
    // - METHODS - //
    const handleClick = () => {
        console.log('FILL UNIVERSE')
        a_fullUniverse()
    }

    // -- //
    return(
        <GameDisplay_Container>
            <div>Game Date: {activeGame.gameTime}</div>

            {activeGame.activeTeams &&
                <button
                    onClick={handleClick}
                >Draft Teams?</button>
            }
        </GameDisplay_Container>
    )
}
// MAP STATE TO PROPS
const mapStateToProps = state => {
    return {
        activeGame: state.ACTIVE_GAME.activeGame
    }
}

// EXPORT w/ CONNECT
export default connect(
    mapStateToProps, // map state to props
    {a_fullUniverse} // action creators
)(GameDisplay)