import styled from "styled-components";
import { keyframes } from "styled-components";

const loading = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform:rotate(360deg)
    }
`


type PropsGeneral = {
    background: string
}

export const GeneralContainer = styled.div<PropsGeneral>`
    background-color: ${PropsGeneral => PropsGeneral.background};
    min-height: 100vh;
    width: 97vw;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;

    @media(max-width: 600px){
        width: 100vw;
    }
`

export const CentralContainer = styled.div`
    max-width: 1200px;
    

    @media (max-width:1000px) {
        width: 800px;    
    }

    @media (max-width:805px) {
        width: 700px;    
    }

    @media (max-width:685px) {
        width: 100%;   
    }
`
export const Loading = styled.img`
    height: 60px;       
    animation: ${loading} .5s linear infinite;


`