import React from 'React';
import styled from 'styled-components'
import tw from 'tailwind.macro'
const StyledDiv = styled.div`
    background-color: tomato;
    padding: 1rem;
    max-width: 70rem;
    margin: auto;
`

const TailwindComponent = styled.div`
    ${tw`bg-blue-500`}
`

const Boilerplate = () => {
    return(
    <>
        <header>
        <h1 className="m-auto">Cosmic Division Boilerplate</h1>
        <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. in cum qui ut deleniti esse temporibus quas voluptatibus?
        </h2>
        </header>
        <main className="container text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eaque suscipit voluptatem? Reprehenderit dolorem tempora, minima, porro voluptate assumenda earum nam ad libero facilis enim, eligendi rem blanditiis velit asperiores.
        </main>
        <StyledDiv>
            <h3>Styled Component</h3>
        </StyledDiv>
        <TailwindComponent>
            <h3>TailwindComponent</h3>
        </TailwindComponent>
        <footer className="mt-auto text-center">footer</footer>

    </>
    )
}

export default Boilerplate;