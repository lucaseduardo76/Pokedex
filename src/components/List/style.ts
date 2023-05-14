import styled from "styled-components";

export const GeneralContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    backgroud-color: red;
    margin-bottom: 30px;

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

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

type PropsCard = {
    Background: string
}
export const Card = styled.div<PropsCard>`
    width: 200px;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${PropsCard => PropsCard.Background};
    border-radius: 10px;
    margin: 20px;
`

export const InfoContainer = styled.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const Name = styled.div`
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
`
export const Index = styled.div`
    color: #fff;        
`
export const Elements = styled.div`   
    display: flex;
    justify-content: space-between;
`

export const BoxElements = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 7px;
    color: white;
    padding: 3px 5px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`

export const ElementsImg = styled.img`    
    height: 20px;
`
export const ButtonToAddCards = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0050ac;
    border-radius: 30px;
    height: 50px;
    width: 200px;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;

`
