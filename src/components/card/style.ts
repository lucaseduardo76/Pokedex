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
    load: boolean
}

export const GeneralContainer = styled.div<PropsGeneral>`
    
    background-color: ${PropsGeneral => PropsGeneral.background};
    min-height: 100vh;
    width: 97vw;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    flex-direction: ${PropsGeneral => PropsGeneral.load ? `row` : `column`};

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
export const CadsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 70px;
    margin-bottom: 20px;
    z-index: 99;
`
export const Icons = styled.img`
    height: 50px;
    cursor: pointer;
    z-index: 99;
 
`