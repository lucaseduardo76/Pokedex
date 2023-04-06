import * as H from './style'
import search from './../../assets/icons/search.svg'
import random from './../../assets/icons/random.svg'
import { useEffect, useState } from 'react'
import pokeball from './../../assets/icons/pokeball.webp'

type Props = {
    inputFunction: (number: number) => void;
}

export const Header = (data: Props) => {
    const [inputValue, setinputValue] = useState('')


    const handleInputFunction = (event: React.ChangeEvent<HTMLInputElement>) =>{
                  
        setinputValue(event.target.value)
        
        
    }

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


            <H.Link href='https://lucased.netlify.app/' target='_blank'>
                <H.PokemonList src={pokeball} alt="" />                
            </H.Link>

            
        </H.HeaderContainer>
    )
}