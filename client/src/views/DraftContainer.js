// IMPORTS
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'

// COMPONENTS
import TeamDraftCard from '../components/TeamDraftCard.js'
import PlayerDraftCard from '../components/PlayerDraftCard.js'

// STYLED COMPONENTS
const UNIVERSE_CONTAINER = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    border-radius: 5px;
    border: 1px solid orange;
`;
// IMPORT FUNCTIONS
function DraftContainer(props) {
const [pickNum, setPickNum] = useState(1)
console.log(props)
    // -- //
    useEffect(() => {
        if(props.type === 'team') {
            if(pickNum > 2) {
                props.setGameState('Pre: Player Draft')
            }
        }
    }, [pickNum])
    // -- //
    return(
        <UNIVERSE_CONTAINER>
            {props.type === 'team' &&
                props.availableUniverse.map((team, key) => {
                // console.log(team)
                    return (
                        <TeamDraftCard 
                            team={team}
                            pickNum={pickNum} setPickNum={setPickNum}
                            id={key} key={key} 
                        />
                    )
                })
            }
            {props.type === 'player' &&
                props.availableUniverse.map((player, key) => {
                    return (
                        <PlayerDraftCard 
                            player={player}
                            pickNum={pickNum} setPickNum={setPickNum}
                            id={key} key={key} 
                        />
                    )
                })
            }


        </UNIVERSE_CONTAINER>
    )
}


const mapStateToProps = state => {
    return {

    }
}

// EXPORT w/ CONNECT
export default connect(
    null, // map state to props
    {

    } // action creators
)(DraftContainer)