import * as H from './style'
import search from './../../assets/icons/search.svg'
import random from './../../assets/icons/random.svg'
import { useEffect, useState } from 'react'
import pokeball from './../../assets/icons/pokeball.webp'

type Props = {
    input: number
}

export const Header = (data: Props) => {
    const [inputValue, setinputValue] = useState('')


    const handleInputFunction = (event: React.ChangeEvent<HTMLInputElement>) =>{
                  
        setinputValue(event.target.value)
        
    }

    useEffect(()=>{
        console.log(inputValue)
    }, [inputValue])
    return (
        <H.HeaderContainer>
            <H.SearchContainer>

                <H.InputContainer>
                    <label>
                        <H.Input type="number" placeholder="Search Here" maxLength={30} max={1008} value={inputValue} onChange={handleInputFunction}/>
                    </label>
                </H.InputContainer>

                <H.Icons>
                    <H.ImgIcons src={search} alt="" />
                    <H.ImgIcons src={random} alt="" />
                </H.Icons>

            </H.SearchContainer>


            <div className="list">
                <H.PokemonList src={pokeball} alt="" />
                
            </div>
        </H.HeaderContainer>
    )
}