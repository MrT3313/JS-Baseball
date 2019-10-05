// - IMPORTS - //
    import React, {useState, useEffect} from 'react'
    import styled from 'styled-components'

// - STYLED COMPONENTS - //
    const GameSummary_Container = styled.div`
        display: flex;

        border-radius: 10px;

        min-height: 20px;
        padding: 10px;
        margin: 10px;

        border: 1px solid blue;
    `;


function GameSummary(props) {
    console.log('Game Summary Props: ',props)
    // -- * -- //
        const { activeGame } = props
    // console.log(activeGame)
    // -- * -- //
        const [state, setState ] = useState(props.activeGame)
    // -- * -- //
    return (
        <>
        {state !== undefined && 
            <GameSummary_Container>
                {`Game Time: ${activeGame.gameTime}`}
            </GameSummary_Container>}
        </>
    )
}

// - EXPORTS - //
export default GameSummary