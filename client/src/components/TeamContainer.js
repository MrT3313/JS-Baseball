// IMPORTS
    import React from 'react'
    import {connect} from 'react-redux'
    import styled from 'styled-components'
    import GAME_RULES from '../config/rules.js'

// IMPORT ACTION CREATORS

// COMPONENTS

// STYLED COMPONENTS
const StyledTeamContainer = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 5px;
    border: 1px solid purple;
`;
const Title = styled.h5`
    display: flex;

    justify-content: center;
    align-items: center;

    margin: 10px;
`;
const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const STYLED_roster = styled.div`
    display: flex;
    flex-direction: column;
`;

// COMPONENT TO EXPORT
function TeamContainer(props) {
    console.log('<TeamContainer /> props',props)
    // -- //
    return(
        <StyledTeamContainer>
            {props.type === 'home' ? <Title>Home Team</Title> : <Title>Away Team</Title>}
            
            <Data className='city'>{props.team.city}</Data>
            <Data className='name'>{props.team.name}</Data>

                <STYLED_roster>
                    {Object.keys(props.team).length !== 0 && props.team.teamPlayers.length !== 0 &&
                    // -- //
                        GAME_RULES.GAME_RULES.positions.forEach(position => {
                            console.log(position)
                            const positionArray = props.team.teamPlayers.filter(player => player.position === position)
                                console.log(positionArray)
                            // -- //
                            return (
                                <>
                                    {/* TODO: Import <RosterArray/> */}
                                </>
                                // <>
                                //     <Title>{position}</Title>
                                //     {positionArray.forEach(filteredPlayer => {
                                //         console.log(filteredPlayer)
                                //         return (
                                //             <div>{`${filteredPlayer.firstName} ${filteredPlayer.lastName}`}</div>
                                //         )
                                //     })}
                                // </>
                            )
                        })
                    }

                </STYLED_roster>

            
        </StyledTeamContainer>
    )
}

// MAP STATE TO PROPS
const mapStateToProps = state => {
    return {
        
    }
}

// EXPORT w/ CONNECT
export default connect(
    null, // map state to props
    {} // action creators
)(TeamContainer)