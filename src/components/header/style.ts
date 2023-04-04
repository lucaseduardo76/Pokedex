import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 40px;

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
    
    @media(max-width: 585px){
        width: 300px;
    }

    @media(max-width: 430px){
        width: 240px;  
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
        color: aliceblue;
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
`

export const ImgIcons = styled.img`
    height: 25px;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover{
        background-color: #ffffff57;
        border-radius: 30px;
        padding: 5px;
    }
`
export const PokemonList = styled.img`
    height: 50px;
`
