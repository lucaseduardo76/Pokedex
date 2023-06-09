import styled from "styled-components";

export const BodyContainer = styled.div`
    height: 450px;
    display: flex;
    justify-content: center;
    gap: 80px;

    @media(max-width: 1000px){        
        gap: 30px;
    }

    @media(max-width: 870px){
        flex-direction: column-reverse;
        align-items: center;        
        margin-top: 40px;
    }
`

export const Number = styled.div`
    position: absolute;
    margin-right: -20px;
    margin-top: -90px;
    z-index: -1;

    @media(max-width: 870px){        
        margin-top: -200px;
    }

    @media(max-width: 730px){
        margin-top: -400px;
        margin-right: 25px;
        right: 0;
    }
`

export const SpanNumber = styled.span`
    font-size: 370px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.2);

    @media(max-width: 870px){
        font-size: 300px;
    }

    @media(max-width: 730px){
        font-size: 90px;
    }
`

export const ArrowContainer = styled.div`
    position: absolute;
    width: auto;
    height: 250px;
    width: 980px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1200px;
    z-index: 100;
    
    @media(max-width: 1000px){        
        width: 750px;
    }

    @media(max-width: 765px){        
        width: 640px;
    }

    @media(max-width: 685px){        
        width: 520px;
    }

    @media(max-width: 540px){        
        width: 460px;
    }
    @media(max-width: 470px){        
        width: 400px;       
        height: 140px;
    }

    @media(max-width: 400px){        
        width: 360px;
    }

`
export const BoxArrow = styled.div`
    height: 70px;
    width: 70px;      
    border-radius: 50px;    
    background-color: rgba(18, 94, 160, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s ease ;
    &:hover{        
        border-radius: 50px;    
        background-color: rgba(240, 248, 255, 0.411);
    }

    @media(max-width: 470px){        
        height: 40px;
        width: 40px;
    }
`

type PropsArrow = { 
    degree: string
}
export const ArrowL = styled.div<PropsArrow>`
    position: absolute;
    padding: 20px;
    box-shadow: 5px -5px 0 1px #fff inset;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    transform: rotate(${PropsArrow => PropsArrow.degree}deg);
`


export const PokeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 10px;
`

export const TitleBox = styled.div`
    display: flex;
    gap: 20px;
    align-items: end;
    color: aliceblue;
`

export const ElementImg = styled.img`
    height: 55px;
`

export const ElementName = styled.div`
    font-size: 15px;
    font-weight: 500;
    
`
export const PokemonName = styled.div`    
    font-size: 55px;
    font-weight: 600;

    @media(max-width: 1000px){               
        font-size: 40px;
    }
`
export const ContainerInfo = styled.div`
    width: 370px; 

    @media(max-width: 870px){
        width: 450px;
    }

    @media(max-width: 685px){
        width: 340px;
    }
`
export const Description = styled.div`   
    margin-bottom: 35px;
    font-size: 13px;
    color: #bbb;
`

export const UlFeature = styled.ul`
    list-style: none;
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-bottom: 50px;
`

export const LiFeature = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: aliceblue;
    font-weight: 600;
`

export const BoxImgPokemon = styled.div`
    display: flex;
    align-items: end;

`

export const ImgPokemon = styled.img`
    height: 370px;
    z-index: 99;

    @media(max-width: 1000px){        
        height: 320px;
    }

    
`
