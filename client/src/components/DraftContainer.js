// - IMPORTS - //
import React from 'react'
import styled from 'styled-components'

// - STYLED COMPONENTS - //
const StyledDraftContainer = styled.div`
    display: flex;

    border: 1px solid purple
`;
// - COMPONENT TO EXPORT - //
function DraftContainer() {
    return(
        <StyledDraftContainer>Draft Container</StyledDraftContainer>
    )
}
// - EXPORTS - //
export default DraftContainer