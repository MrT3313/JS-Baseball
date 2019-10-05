// - IMPORTS - //
    import React from 'react'
    import styled from 'styled-components'

// - STYLED COMPONENTS - //
    const ButtonContainer = styled.button`
        display: flex;
        justify-content: center;

        border-radius: 10px;

        width: 25%;

        border: 1px solid orange;
    `;

// - COMPONENT TO EXPORT - //
    function Button(props) {
        console.log(props)
        // -- * -- //
        return (
            <ButtonContainer
                onClick={props.buttonFunction}
            >
                <p>
                    {props.buttonText}
                </p>
            </ButtonContainer>
        )
    }

    export default Button