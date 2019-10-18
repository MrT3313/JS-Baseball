// IMPORTS
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'

// COMPONENTS
import TeamDraftCard from '../components/TeamDraftCard.js'
import PlayerDraftCard from '../components/PlayerDraftCard.js'

// STYLED COMPONENTS
const STYLED_draftProgress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const STYLED_container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;
const STYLED_draftBoard = styled.div`
    display: flex;
    flex-direction: column;

    padding: 15px;

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;

        .subTitle {
            margin-top: 5px;
            display: flex;
            justify-content: center;
            font-style: italic;
        }
    }

    border-radius: 5px;
    border: 1px solid orange;
`;
const STYLED_teamDraft = styled.div`
    display: flex;
`;
const STYLED_playerDraft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const STYLED_playerUniverse = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
`;
const STYLED_positionCatTab = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10px 0;

    .selectedCat{
        margin-top: 10px;
    }
    button {
        margin-right: 5px;
    }
    button:last-child() {
        margin: 0px;
    }
`;


// IMPORT FUNCTIONS
function DraftContainer(props) {
const [pickNum, setPickNum] = useState(1)
const [selectedCategory, setSelectedCategory] = useState('infield')
console.log(props)
// -- //
    useEffect(() => {
        if(props.type === 'team') {
            if(pickNum > 2) {
                setPickNum(1)
                props.setGameState('Pre: Player Draft')
            }
        }
    }, [pickNum])

    useEffect(() => {

    }, [selectedCategory])
    // -- //
    return(
        <STYLED_container>
            <STYLED_draftProgress>
                <div>Pick Number: {pickNum}</div>
                {pickNum % 2 !== 0 ? <div> Home Team, Its Your Pick! </div> : <div> Away Team, Its Your Pick! </div>}
            </STYLED_draftProgress>
            <STYLED_draftBoard>
                <div className='title'>
                    Live Draft Board -- Remaining Available Universe
                    <div className='subTitle'>** Click to select **</div>
                </div>
                <div >
                    {props.type === 'team' &&
                    <STYLED_teamDraft>
                        
                        {props.availableUniverse.map((team, key) => {
                        // console.log(team)
                            return (
                                <TeamDraftCard 
                                    team={team}
                                    pickNum={pickNum} setPickNum={setPickNum}
                                    id={key} key={key} 
                                />
                            )
                        })}
                    </STYLED_teamDraft>
                    }
                    {props.type === 'player' &&
                        <STYLED_playerDraft>
                            <STYLED_positionCatTab>
                                <div className='tabs'>
                                    {selectedCategory !== 'infield' && 
                                        <button onClick={() => setSelectedCategory('infield')} >Infielders</button>
                                    }
                                    {selectedCategory !== 'outfield' && 
                                        <button onClick={() => setSelectedCategory('outfield')} >Outfielders</button>
                                    }
                                    {selectedCategory !== 'pitcher' && 
                                        <button onClick={() => setSelectedCategory('pitcher')} >Pitchers</button>
                                    }
                                    {selectedCategory !== 'dh' &&
                                        <button onClick={() => setSelectedCategory('dh')} >DH's</button>
                                    }
                                </div>
                                <div className='selectedCat'>
                                    {selectedCategory === 'infield' && <div>Showing: Infielders</div>}
                                    {selectedCategory === 'outfield' && <div>Showing: Outfielders</div>}
                                    {selectedCategory === 'pitcher' && <div>Showing: Pitchers</div>}
                                    {selectedCategory === 'dh' && <div>Showing: DH's</div>}
                                </div>
                            </STYLED_positionCatTab>
                            <STYLED_playerUniverse>
                                {props.availableUniverse.filter(player => player.position === selectedCategory)
                                    .map((player, key) => {
                                    return (
                                        <PlayerDraftCard 
                                            player={player}
                                            pickNum={pickNum} setPickNum={setPickNum}
                                            id={key} key={key} 
                                        />
                                    )
                                })}
                                {/* {props.availableUniverse.map((player, key) => {
                                    return (
                                        <PlayerDraftCard 
                                            player={player}
                                            pickNum={pickNum} setPickNum={setPickNum}
                                            id={key} key={key} 
                                        />
                                    )
                                })} */}
                            </STYLED_playerUniverse>
                        </STYLED_playerDraft>
                    }
                </div>


            </STYLED_draftBoard>
        </STYLED_container>
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