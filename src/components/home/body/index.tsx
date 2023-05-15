import { SwitchElementImg } from '../../../interface/imgElementSelector/switchImg'
import * as B from './style'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    imgId: any
    load: boolean
    arrow: boolean

}

export const Body = (data: PropsMain) => {

    const [imgElement, setImgElement] = useState('');
    let pokemonNome: string = 'pokemon'
    let pokemonElemento: string = 'unkown'

    if (data.json.name != undefined) {
        pokemonNome = data.json.name.charAt(0).toUpperCase() + data.json.name.slice(1);
        pokemonElemento = data.elemento.charAt(0).toUpperCase() + data.elemento.slice(1);
    }

    const convertNumber = (num: number): string | number => {
        if (num < 10) {
            return `00${num}`
        } else if (num < 100) {
            return `0${num}`
        } else {
            return num
        }
    }

    useEffect(() => {
        setImgElement(SwitchElementImg(data.elemento))
    }, [data.elemento])



    return (
        <B.BodyContainer>
            {data.load &&

                <B.Number>
                    <B.SpanNumber>#{convertNumber(data.json.id)}</B.SpanNumber>
                </B.Number>

            }

            {data.arrow &&
                <B.ArrowContainer>

                    <B.BoxArrow onClick={data.functionPrev}>
                        <B.ArrowL degree={'45'}></B.ArrowL>
                    </B.BoxArrow>


                    <B.BoxArrow onClick={data.functionNext}>
                        <B.ArrowL degree={'225'}></B.ArrowL>
                    </B.BoxArrow>

                </B.ArrowContainer>
            }




            {data.load &&

                <>

                    <B.PokeInfo>

                        <B.TitleBox>
                            <div>
                                <B.ElementImg src={imgElement} alt='Elemento' />
                            </div>

                            <div>
                                <B.ElementName>{pokemonElemento}</B.ElementName>
                                <B.PokemonName>{pokemonNome}</B.PokemonName>
                            </div>
                        </B.TitleBox>

                        <B.ContainerInfo>
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
                        </B.ContainerInfo>

                    </B.PokeInfo>

                    <B.BoxImgPokemon>
                        <B.ImgPokemon src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${convertNumber(data.imgId)}.png`} alt="" />
                    </B.BoxImgPokemon>
                </>
            }

        </B.BodyContainer>

    )
}