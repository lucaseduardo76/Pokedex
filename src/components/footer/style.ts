import styled from "styled-components";

export const StatsContainer = styled.div`
    padding: 0 150px;
    margin-top: 10px;
    display: flex;
    margin-bottom: 20px;

    @media(max-width: 870px){
        padding: 0 70px;
        margin-top: 30px;
    }

    @media(max-width: 630px){
        padding: 0 40px;
    }

    @media(max-width: 585px){
        justify-content:center;
    }
`

export const TitleFooter = styled.div`
    margin-right: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    font-weight: 500;
    font-size: 20px;

    @media(max-width: 630px){
        margin-right: 50px;
    }

    @media(max-width: 585px){
        display: none;
    }
`

export const UlStats = styled.ul`
    list-style: none;
    width: 500px;
    
    @media(max-width: 765px){        
        width: 400px;
    }

    @media(max-width: 430px){        
        width: 350px;
    }
    
`
export const LiStats = styled.li`
    margin-bottom: 8px;
    color: aliceblue;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    font-size: 16px;
`

export const ContainerBars = styled.div`
    display: flex;
    justify-content: space-between;
    width: 370px;
    height: 100%;
    align-items: center;

    @media(max-width: 765px){
        width: 250px;
    }

    @media(max-width: 430px){
        width: 200px;
    }
`

type PropsLevelBar = {
    level: number
}


export const LevelBar = styled.div<PropsLevelBar>`
    width: ${(PropsLevelBar)=> 250 * PropsLevelBar.level / 200}px;
    height: 100%;
    color: rgba(0,0,0,0);
    background-color: rgba(255,255,255,0.7);
    border-radius: 10px;
    

    @media(max-width: 765px){        
        width: ${(PropsLevelBar)=> 200 * PropsLevelBar.level / 200}px;
    }

    @media(max-width: 630px){        
        width: ${(PropsLevelBar)=> 150 * PropsLevelBar.level / 200}px;
    }
    
    @media(max-width: 430px){        
        width: ${(PropsLevelBar)=> 100 * PropsLevelBar.level / 200}px;
    }   

    
`