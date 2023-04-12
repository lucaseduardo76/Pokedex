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


    const handleInputFunction = (event: React.ChangeEvent<HTMLInputElement>):void =>{
        
        setinputValue(event.target.value)     
        
    }

    const handleSendInfoToApp = ():void =>{
        const numberInput: number = parseInt(inputValue)
        data.inputFunction(numberInput)
    }

    const handleRandomNumberToApp = ():void=>{
        const randomNumber = Math.random() * (1008 - 1) + 1;
        data.inputFunction(Math.trunc(randomNumber))
    }

    return (
        <H.HeaderContainer>
            <H.SearchContainer>

                <H.InputContainer>
                    <label>
                        <H.Input type="number" placeholder="Search Here" maxLength={30} max={1008} onChange={handleInputFunction}/>
                    </label>
                </H.InputContainer>

                <H.Icons>
                    <H.ImgIcons src={search} alt="" onClick={handleSendInfoToApp}/>
                    <H.ImgIcons src={random} alt="" onClick={handleRandomNumberToApp}/>
                </H.Icons>

            </H.SearchContainer>


            <H.Link href='https://lucased.netlify.app/' target='_blank'>
                <H.PokemonList src={pokeball} alt="" />                
            </H.Link>

            
        </H.HeaderContainer>
    )
}