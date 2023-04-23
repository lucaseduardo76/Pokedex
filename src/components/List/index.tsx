import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { SwitchElementImg } from '../../interface/imgElementSelector/switchImg'

type Props = {
    cardIndex: number
    name: string
    type: string
    secType?: string
    UpperCaseLetter: (data: string) => string
    convertNumber: (data: number) => number | string

}

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
        <div className="card">
            <div className="photo">
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${convertNumber(data.cardIndex)}.png`} alt="" />
            </div>

            <div className="infos">
                <div className='name'>{WordFirstLetterUpperCase(name)}</div>
                <div className='index'>#{data.cardIndex}</div>
            </div>

            <div className="elements">

                <div className="boxElement">
                    <img src={SwitchElementImg(type)} alt="" />
                    <span>{WordFirstLetterUpperCase(type)}</span>
                </div>

                {secType &&
                    <div className="boxElement">
                        <img src={SwitchElementImg(secType)} alt="" />
                        <span>{WordFirstLetterUpperCase(secType)}</span>
                    </div>
                }

            </div>
        </div>
    )
}

export const List = () => {
    const [index, setIndex] = useState<number>(1);

    let Array = [1]

    for(let n = 2; n <= 50; n++){
        Array.push(n)
    }
    
    return (
        <div className="container">
            <div>

            {
                Array.map((item, key)=>(
                    <Card
                        cardIndex={item}
                        key={key}
                    />
                ))
            }
                

            </div>
        </div>
    )
}

/*
cardIndex={cardIndex}
                    name={name}
                    type={type}
                    secType={secType}
                    UpperCaseLetter={WordFirstLetterUpperCase}
                    convertNumber={convertNumber}
                    */