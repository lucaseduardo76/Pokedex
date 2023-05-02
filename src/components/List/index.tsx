import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { SwitchElementImg } from '../../interface/imgElementSelector/switchImg'
import { SwitchBackgroundColor } from '../../interface/colorSelector/switchColor'
import * as C from './style'
import { Header } from '../home/header'


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
        <C.Card Background={SwitchBackgroundColor(type)}>
            <div>
                <img style={{ height: '150px' }} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${convertNumber(data.cardIndex)}.png`} alt="" />
            </div>

            <C.InfoContainer>
                <C.Name>{WordFirstLetterUpperCase(name)}</C.Name>
                <C.Index>#{convertNumber(data.cardIndex)}</C.Index>
            </C.InfoContainer>

            <C.Elements>

                <C.BoxElements>
                    <C.ElementsImg src={SwitchElementImg(type)} alt="" />
                    <span>{WordFirstLetterUpperCase(type)}</span>
                </C.BoxElements>

                {secType &&
                    <C.BoxElements>
                        <C.ElementsImg src={SwitchElementImg(secType)} alt="" />
                        <span>{WordFirstLetterUpperCase(secType)}</span>
                    </C.BoxElements>
                }

            </C.Elements>
        </C.Card>
    )
}



type Props = {
    innerRef: any
}

export const List = (data: Props) => {
    const [isBottom, setIsBottom] = useState(true);
    const [list, setList] = useState<number>(30)
    const [prev, setPrev] = useState<number>(0)

    let Array = []

    for (let n = 1; n <= list; n++) {
        Array.push(n)
    }

    const a = () =>{

    }

    useEffect(()=>{
        setPrev(list)
    }, [list])

    useEffect(() => {
        const handleScroll = ()=>{
            
                const screenHeight = data.innerRef.current.scrollHeight;
                if(screenHeight != null){
                    console.log(window.scrollY + ' de ' + screenHeight)
    
                    if(screenHeight <= window.scrollY + 1000){
                        const test = list
                        setList(list + 100)
                    }
                }
            
            console.log("esse é o list = " + list)
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Header
                inputFunction={a} 
                link={'/'}
            />
            <C.Container >


                {
                    Array.map((item, key) => (
                        <Card
                            cardIndex={item}
                            key={key}
                        />
                    ))
                }



            </C.Container>
        </>
    )
}

