// - IMPORTS - //
    import React from 'react'
    import styled from 'styled-components'

// - STYLED COMPONENTS - //
    const ButtonContainer = styled.button`
        display: flex;
        justify-content: center;

        margin-top: 5px;

        border-radius: 10px;
        border: 1px solid orange;
    `;

// - COMPONENT TO EXPORT - //
    function Button(params) {
        console.log('<Button />',params)
        // -- * -- //
        const handleClick = e => {
            e.preventDefault()
            console.log(params.id)
            if (!params.id) {
                params.buttonFunction(params.buttonText)
            } else {
                params.buttonFunction(params.id)
            }
        }
        // -- * -- //
        return (
            <ButtonContainer
                onClick={handleClick}
            >
                <p>
                    {params.buttonText}
                </p>
            </ButtonContainer>
        )
    }

    export default Button