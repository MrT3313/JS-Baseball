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

    min-width: 200px;

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

    .player {
        display: flex;
        justify-content: space-between;

        margin-left: 10px;
        margin-right: 10px;

        .playerName {
            margin-right: 10px;
        }
    }
    .emptyRoster {
        display: flex;
        justify-content: center;
    }
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
                        <>
                            <div>
                                <div>Infielders</div>

                                {props.team.teamPlayers.filter(player => player.position === 'infield').map((player, index) => {
                                    return (
                                        <div className='player'>
                                            <div>
                                                {player.lastName ?
                                                    <div className='playerName'> {`${player.firstName} ${player.lastName} `} </div>
                                                    :
                                                    <div className='playerName'> {`${player.firstName}`} </div>
                                                }
                                            </div>
                                            <div>
                                                {`${player.power} -- ${player.skill} -- ${player.speed}` }
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div>Outfielders</div>
                            {props.team.teamPlayers.filter(player => player.position === 'outfield').map((player, index) => {
                                    return (
                                        <div className='player'>
                                            <div>
                                                {player.lastName ?
                                                    <div className='playerName'> {`${player.firstName} ${player.lastName} `} </div>
                                                    :
                                                    <div className='playerName'> {`${player.firstName}`} </div>
                                                }
                                            </div>
                                            <div>
                                                {`${player.power} -- ${player.skill} -- ${player.speed}` }
                                            </div>
                                        </div>
                                    )
                                })}
                            <div>Pitchers</div>
                            {props.team.teamPlayers.filter(player => player.position === 'pitcher').map((player, index) => {
                                    return (
                                        <div className='player'>
                                            <div>
                                                {player.lastName ?
                                                    <div className='playerName'> {`${player.firstName} ${player.lastName} `} </div>
                                                    :
                                                    <div className='playerName'> {`${player.firstName}`} </div>
                                                }
                                            </div>
                                            <div>
                                                {`${player.power} -- ${player.skill} -- ${player.speed}` }
                                            </div>
                                        </div>
                                    )
                                })}
                            <div>DH's</div>
                            {props.team.teamPlayers.filter(player => player.position === 'dh').map((player, index) => {
                                    return (
                                        <div className='player'>
                                            <div>
                                                {player.lastName ?
                                                    <div className='playerName'> {`${player.firstName} ${player.lastName} `} </div>
                                                    :
                                                    <div className='playerName'> {`${player.firstName}`} </div>
                                                }
                                            </div>
                                            <div>
                                                {`${player.power} -- ${player.skill} -- ${player.speed}` }
                                            </div>
                                        </div>
                                    )
                                })}
                        </>
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