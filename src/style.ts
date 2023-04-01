import styled from "styled-components";

type PropsGeneral = {
    background: string
}

export const GeneralContainer = styled.div<PropsGeneral>`
    background-color: ${PropsGeneral => PropsGeneral.background};
    width: 100vw;
    display:flex;
    justify-content: center;
`

export const CentralContainer = styled.div`
    max-width: 1200px;
    height: 130vh;

    @media (max-width:1000px) {
            width: 800px;    
    }
`