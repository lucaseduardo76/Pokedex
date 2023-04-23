import * as H from './style'
import search from './../../../assets/icons/search.svg'
import random from './../../../assets/icons/random.svg'
import pokeball from './../../../assets/icons/pokeball.webp'
import { Link } from 'react-router-dom'

import { useState } from 'react'

type Props = {
    inputFunction: (number: number) => void;
    link: string
}

export const Header = (data: Props) => {
    const [inputValue, setinputValue] = useState('')


    const handleInputFunction = (event: React.ChangeEvent<HTMLInputElement>): void => {

        setinputValue(event.target.value)

    }

    const handleSendInfoToApp = (): void => {
        const numberInput: number = parseInt(inputValue)
        data.inputFunction(numberInput)
        setinputValue('')
    }

    const handleRandomNumberToApp = (): void => {
        const randomNumber = Math.random() * (1008 - 1) + 1;
        data.inputFunction(Math.trunc(randomNumber))
        setinputValue('')
    }

    const handleSendInfoToAppByEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.keyCode == 13) {
            handleSendInfoToApp()
        }
    }

    return (
        <H.HeaderContainer>
            <H.SearchContainer>

                <H.InputContainer>
                    <label>
                        <H.Input type="number" placeholder="Ex..: 385" maxLength={30} max={1008} value={inputValue} onChange={handleInputFunction} onKeyUp={handleSendInfoToAppByEnter} />
                    </label>
                </H.InputContainer>

                <H.Icons>
                    <H.ImgIcons src={search} alt="" onClick={handleSendInfoToApp} />
                    <H.ImgIcons src={random} alt="" onClick={handleRandomNumberToApp} />
                </H.Icons>

            </H.SearchContainer>

            <H.Ball>
                <Link to={data.link}>
                    <H.PokemonList src={pokeball} alt="" />
                </Link>
            </H.Ball>

        </H.HeaderContainer>
    )
}