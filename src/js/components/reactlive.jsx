import React from 'react';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview } from 'react-live';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const EditorWrapper = styled(LiveEditor)`
    ${tw`bg-gray-900 p-4 m-2`}
`
const headerCode = `const StyledDiv = styled.div\`
// editable code
    background-color: tomato;
    padding: 1rem;
    max-width: 70rem;
    margin: auto;
\`
render(
<StyledDiv>
<h3>Styled Component</h3>
</StyledDiv>
)`
const EditableComponent = () => {
    return(
<LiveProvider 
    code={headerCode} 
    noInline 
    scope={{ React, styled }}>
    <EditorWrapper />
    <LiveError />
    <LivePreview />
</LiveProvider>
    )
}
export default EditableComponent;