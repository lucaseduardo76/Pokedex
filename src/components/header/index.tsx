import * as H from './style'
import search from './../../assets/icons/search.svg'
import random from './../../assets/icons/random.svg'
import { useState } from 'react'

type Props = {
    input: number
}

export const Header = (data: Props) => {
    const [inputValue, setinputValue] = useState('')

    const handleInputFunction = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setinputValue(event.target.value)
        data.input = Number(inputValue)
    }

    return (
        <H.HeaderContainer>
            <H.SearchContainer>

                <H.InputContainer>
                    <label>
                        <H.Input type="text" placeholder="Search Here" maxLength={30} max={1008} onChange={handleInputFunction}/>
                    </label>
                </H.InputContainer>

                <H.Icons>
                    <H.ImgIcons src={search} alt="" />
                    <H.ImgIcons src={random} alt="" />
                </H.Icons>

            </H.SearchContainer>


            <div className="list">
                <H.UlHeader>
                    <H.LiHeader>Pokemon List</H.LiHeader>
                </H.UlHeader>
            </div>
        </H.HeaderContainer>
    )
}