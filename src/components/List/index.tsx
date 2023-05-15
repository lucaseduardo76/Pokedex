import { useEffect, useState } from 'react'
import axios from 'axios'
import { SwitchElementImg } from '../../interface/imgElementSelector/switchImg'
import { SwitchBackgroundColor } from '../../interface/colorSelector/switchColor'
import * as C from './style'
import { Header } from '../home/header'
import pokeball from './../../assets/icons/grayBall.jpg'
import { Link } from 'react-router-dom'

type PropsTwo = {
    cardIndex: number
}

const Card = (data: PropsTwo) => {
    const [type, setType] = useState('');
    const [secType, setSecType] = useState('');
    const [name, setName] = useState('');

    const convertNumber = (num: number): string | number => {
        if (num < 10) {
            return `00${num}`
        } else if (num < 100) {
            return `0${num}`
        } else {
            return num
        }
    }

    const WordFirstLetterUpperCase = (data: string): string => {
        let convertedName: string = '';
        if (data != undefined) {
            convertedName = data.charAt(0).toUpperCase() + data.slice(1);
        }

        return convertedName
    }

    useEffect(() => {

        axios.get<any>(`https://pokeapi.co/api/v2/pokemon/${data.cardIndex}/`)
            .then((response: any) => {
                const json = response.data;

                setType(json.types[0].type.name)
                setSecType(json.types[1]?.type.name)
                setName(json.name)


            })
            .catch((error: any) => {

                console.log(error);
            });
    }, [data.cardIndex])

    return (
        <Link to={`/card/${data.cardIndex}`} style={{ textDecoration: 'none' }}>

            <C.Card Background={SwitchBackgroundColor(type)}>

                <C.BackgroundImg src={pokeball} alt="" />

                <div>
                    <img style={{ height: '150px', zIndex: '99' }} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${convertNumber(data.cardIndex)}.png`} alt="" />
                </div>

                <C.InfoContainer>
                    <C.Name>{WordFirstLetterUpperCase(name)}</C.Name>
                    <C.Index>#{convertNumber(data.cardIndex)}</C.Index>
                </C.InfoContainer>

                <C.Elements>

                    <C.BoxElements>
                        <C.ElementsImg src={SwitchElementImg(type)} alt="" />
                        <span >{WordFirstLetterUpperCase(type)}</span>
                    </C.BoxElements>

                    {secType &&
                        <C.BoxElements>
                            <C.ElementsImg src={SwitchElementImg(secType)} alt="" />
                            <span>{WordFirstLetterUpperCase(secType)}</span>
                        </C.BoxElements>
                    }

                </C.Elements>


            </C.Card>
        </Link>
    )
}




export const List = () => {
    const [list, setList] = useState<number>(25)

    let cardsList = []

    for (let n = 1; n <= list; n++) {
        cardsList.push(n)
    }

    const handleScroll = () => {
        setList(list + 25)
    }

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {

    }, [])

    return (
        <C.GeneralContainer>

            <Header
                // The fuction of this components will be make in the next uploading
                inputFunction={() => { }}
                link={'/'}
            />

            <C.Container >


                {
                    cardsList.map((item, key) => (
                        <Card
                            cardIndex={item}
                            key={key}
                        />
                    ))
                }



            </C.Container>

            <C.ButtonToAddCards className="button" onClick={handleScroll}>
                Ver mais
            </C.ButtonToAddCards>


            <C.BoxArrow onClick={handleScrollTop}>
                <C.ArrowL> </C.ArrowL>
            </C.BoxArrow>

        </C.GeneralContainer>
    )
};

