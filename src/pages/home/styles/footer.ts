import styled from "styled-components";

export const StatsContainer = styled.div`
    padding: 0 150px;
    margin-top: 10px;
    display: flex;
`

export const TitleFooter = styled.div`
    margin-right: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    font-weight: 500;
    font-size: 20px;
`

export const UlStats = styled.ul`
    list-style: none;
    width: 500px;
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
    width: ${(PropsLevelBar)=> 300 * PropsLevelBar.level / 100}px;
    height: 100%;
    background-color: aliceblue;
    border-radius: 5px;

    
`