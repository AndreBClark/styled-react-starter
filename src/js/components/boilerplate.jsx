import React from 'React';
import styled from 'styled-components'
import tw from 'tailwind.macro'

const TailwindComponent = styled.div`
    ${tw`m-3 bg-blue-500 mx-auto max-w-2xl p-3`}
`

const Boilerplate = ({children}) => {
    return(
        <>
            <header>
            <h1 className="m-auto">Cosmic Division Boilerplate</h1>
            <h2>
                Styled components Playground
            </h2>
            </header>
            <main className="container text-lg max-w-2xl">
                {children}
            <TailwindComponent>
                <h3>TailwindComponent</h3>
            </TailwindComponent>
            </main>
            <footer className="mt-auto text-center">footer</footer>
        </>
    )
}

export default Boilerplate;