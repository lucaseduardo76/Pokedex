import styled from "styled-components";

export const BodyContainer = styled.div`
    height: 450px;
    display: flex;
    justify-content: center;
    gap: 80px;

    @media(max-width: 1000px){        
        gap: 30px;
    }
`

export const Number = styled.div`
    position: absolute;
    margin-right: -100px;
    margin-top: -40px;
    z-index: 1;
`

export const SpanNumber = styled.span`
    font-size: 250px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.2);
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

    @media(max-width: 1000px){        
        width: 750px;
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
`

export const LeftArrow = styled.img`
    height: 50px;
    margin-right: -15px;
`

export const RightArrow = styled.img`
    height: 50px;
    margin-right: 15px;
    transform: rotate(180deg);
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
    height: 400px;
    z-index: 99;

    @media(max-width: 1000px){        
        height: 320px;
    }
`