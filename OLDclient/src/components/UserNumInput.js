// - IMPORTS - //
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from './Button.js'

// - STYLED COMPONENTS - //
const NumInputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px dashed blue;
    padding: 10px; 
    border-radius: 10px;

    .numberContainer {
        display: flex;
        justify-content: space-around;

        width: 90%;
    }
`;

// - COMPONENT TO EXPORT - //
function NumInput(params){
    console.log('<NumInput /> params: ', params)
    const [num, setNumber] = useState()

    useEffect(() => {
        params.getHumanPlayers(num)
    }, [num])
    return (
        <NumInputContainer
            onSubmit
        >
            <div>
                Please enter number of human players: 
            </div>
            <div className='numberContainer'>
                <Button
                    buttonText={'0'}
                    buttonFunction={setNumber}
                />
                <Button 
                    buttonText={'1'}
                    buttonFunction={setNumber}
                />
                <Button 
                    buttonText={'2'} 
                    buttonFunction={setNumber}
                />
            </div>
        </NumInputContainer>
    )
}
// - EXPORTS - //
export default NumInput 