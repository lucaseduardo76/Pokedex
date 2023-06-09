import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 40px;
    width: 100%;
    z-index: 999;
    @media(max-width: 430px){        
        padding: 0 10px; 
    }
`

export const SearchContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.349);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    width: 400px;
    padding: 5px;
    border-radius: 10px;
    z-index: 999;
    margin-right: 20px;

    @media(max-width: 585px){
        width: 300px;
    }

    @media(max-width: 450px){
        width: 270px;  
    }
`
export const InputContainer = styled.div`
    height: 35px;
    flex: 4;
`
export const Input = styled.input`
    border: none;
    height: 100%;
    font-size: 15px;
    font-weight: 700;
    width: 100%;
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0);

    &::placeholder{
        color: rgba(255, 255, 255, 0.5);
    }

    &:focus{
        outline: none;
    }

    
`
export const Icons = styled.div`
    flex: 1;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;

    @media(max-width: 430px){
        max-width: 80px;
        flex: 2;
    }
`

export const ImgIcons = styled.img`
    height: 25px;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover{
        background-color: #ffffff57;
        border-radius: 30px;
    }
`
export const PokemonList = styled.img`
    height: 50px;
    cursor: pointer;
    
`
export const Ball = styled.div`
    z-index: 9699;
`