
import arrow from './../../assets/icons/arrow.svg'
import { SwitchElementImg } from '../../interface/imgElementSelector/switchImg'
import * as B from './style'
import { useState, useEffect } from 'react'

type PropsMain = {
    json: {
        id: number
        name: string
        height: number
        weight: number
    },
    ability: string,
    functionNext: () => void,
    functionPrev: () => void,
    elemento: string,
    imgId: number

}

export const Body = (data: PropsMain) => {
    const [imgElement, setImgElement] = useState('');

    const convertNumber = (num: number): string | number => {
        if (num < 10) {
            return `00${num}`
        } else if (num < 100) {
            return `0${num}`
        } else {
            return num
        }
    }

    useEffect(()=>{
        setImgElement(SwitchElementImg(data.elemento))
    }, [data.elemento])

    return (
        <B.BodyContainer>

            <B.Number>
                <B.SpanNumber>#{convertNumber(data.json.id)}</B.SpanNumber>
            </B.Number>

            <B.ArrowContainer>
                <B.BoxArrow onClick={data.functionPrev}>
                    <B.LeftArrow src={arrow} alt="LEFT ARROW" />
                </B.BoxArrow>

                <B.BoxArrow onClick={data.functionNext}>
                    <B.RightArrow src={arrow} alt="RIGHT ARROW" />
                </B.BoxArrow>
            </B.ArrowContainer>



            <B.PokeInfo>

                <B.TitleBox>
                    <div>
                        <B.ElementImg src={imgElement} alt='Elemento'/>
                    </div>

                    <div>
                        <B.ElementName>{data.elemento}</B.ElementName>
                        <B.PokemonName>{data.json.name}</B.PokemonName>
                    </div>
                </B.TitleBox>

                <div>
                    <B.UlFeature>

                        <B.LiFeature>
                            <span>Height</span>
                            <span>{data.json.height / 10} M</span>
                        </B.LiFeature>

                        <B.LiFeature>
                            <span>Weight</span>
                            <span>{data.json.weight / 10} kg</span>
                        </B.LiFeature>

                        <B.LiFeature>
                            <span>abilities</span>
                            <span>{data.ability}</span>
                        </B.LiFeature>

                    </B.UlFeature>
                </div>

            </B.PokeInfo>

            <B.BoxImgPokemon>
                <B.ImgPokemon src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${convertNumber(data.imgId)}.png`} alt="" />
            </B.BoxImgPokemon>
        </B.BodyContainer>
    )
}