// - IMPORTS - //
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TeamCard from './TeamCard.js'
import { bigIntLiteral } from '@babel/types';
// - STYLED COMPONENTS - //
const StyledDraftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 10px;
    width: 100%;

    border: 1px solid purple
`;
const AvailableTeams = styled.div`
    display: flex;
    justify-content: space-around;

    width: 100%;
`;
const SelectedTeamsContainer = styled.div`
    display: flex;

    margin: 20px;
    width: 100%;

    border: 1px solid teal;
`;
const Title = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: bold;

    margin-bottom: 10px; 
`;
// - COMPONENT TO EXPORT - //
function DraftContainer(props) {
        const [team_1, setTeam_1] = useState(undefined)
        const [team_2, setTeam_2] = useState(undefined)
        const [pickNum, setPickNum] = useState(0)
        const [pick, setPick] = useState(undefined)
    // -- * -- //
        const {teamUniverse} = props
        let draftArray = teamUniverse
            console.log(draftArray)
    // -- * -- //
    useEffect(() => {
        console.log('useEffect Triggered')
        console.log(team_1)
        console.log(team_2)
        console.log(pick)
    })
    // -- * -- //
    return(
        <>
            <StyledDraftContainer>
                <Title>
                    Available Teams:
                </Title>
                <AvailableTeams className='AvailableTeamsContainer'>
                    {draftArray.map((team, key) => {
                        return <TeamCard 
                            key={key} 
                            team={team}
                            id={key}
                            draft={setPick}
                        />
                    })}
                </AvailableTeams>
            </StyledDraftContainer>
            <h3>
                Selected Teams:
            </h3>
            <SelectedTeamsContainer>
                {pickNum === 1 && 
                    <Title>
                        Time for the First Team to pick!
                    </Title>
                } 
            </SelectedTeamsContainer>
        </>
    )
}
// - EXPORTS - //
export default DraftContainer