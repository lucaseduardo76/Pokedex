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
`

export const UlStats = styled.ul`
    list-style: none;
    width: 500px;
   

    @media(max-width: 765px){        
        width: 400px;
    }
    
`
export const LiStats = styled.li`
    margin-bottom: 8px;
    color: aliceblue;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
`
type PropsLevelBar = {
    level: number
}

export const LevelBar = styled.div<PropsLevelBar>`
    width: ${(PropsLevelBar)=> 300 * PropsLevelBar.level / 200}px;
    height: 100%;
    background-color: aliceblue;
    border-radius: 5px;

    @media(max-width: 765px){        
        width: ${(PropsLevelBar)=> 200 * PropsLevelBar.level / 200}px;
    }

    @media(max-width: 630px){        
        width: ${(PropsLevelBar)=> 150 * PropsLevelBar.level / 200}px;
    }   

    
`