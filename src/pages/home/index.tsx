import { useEffect, useState } from 'react'
import './style.css'
import './styleFooter.css'
import search from './../../assets/icons/search.svg'
import random from './../../assets/icons/random.svg'
import arrow from './../../assets/icons/arrow.svg'
import pokemon from './../../assets/pokemon/6.png'
import elemento from './../../assets/elements/fire.svg'
import * as H from './styles/header'
import * as B from './styles/body'
import * as S from './styles/footer'

const Api = () => {
    const [b, setB] = useState({})

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/14/')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setB(json)
                console.log(json)
            })
    }, [])

    return b
}
const Header = () => {
    return (
        <H.HeaderContainer>
            <H.SearchContainer>

                <H.InputContainer>
                    <label>
                        <H.Input type="text" placeholder="Search Here" maxLength={30} />
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
type PropsPokemonJson = {
    name: string
    weight: string
    height: string
}
const Main = () => {
    const [pokemonJson, setPokemonJson
    ] = useState<PropsPokemonJson | any>({})
    const [ability, setAbility] = useState('')

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/6/')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setPokemonJson(json)
                setAbility(json.abilities[0].ability.name)                
            })
    }, [])

 

    return (
        <B.BodyContainer>

            <B.Number>
                <B.SpanNumber>#{pokemonJson.id}</B.SpanNumber>
            </B.Number>

            <B.ArrowContainer>
                <B.BoxArrow>
                    <B.LeftArrow src={arrow} alt="LEFT ARROW" />
                </B.BoxArrow>

                <B.BoxArrow>
                    <B.RightArrow src={arrow} alt="RIGHT ARROW" />
                </B.BoxArrow>
            </B.ArrowContainer>



            <B.PokeInfo>

                <B.TitleBox>
                    <div>
                        <B.ElementImg src={elemento} alt="" />
                    </div>

                    <div>
                        <B.ElementName>FIRE</B.ElementName>
                        <B.PokemonName>{pokemonJson.name}</B.PokemonName>
                    </div>
                </B.TitleBox>

                <B.Description>
                    pokemon de fogo que parece um filhote de dragão
                </B.Description>

                <div>
                    <B.UlFeature>

                        <B.LiFeature>
                            <span>Height</span>
                            <span>{pokemonJson.height/10} M</span>
                        </B.LiFeature>

                        <B.LiFeature>
                            <span>Weight</span>
                            <span>{pokemonJson.weight/10} kg</span>
                        </B.LiFeature>

                        <B.LiFeature>
                            <span>Category</span>
                            <span>Lizard</span>
                        </B.LiFeature>

                        <B.LiFeature>
                            <span>abilities</span>
                            <span>{ability}</span>
                        </B.LiFeature>

                    </B.UlFeature>
                </div>

            </B.PokeInfo>

            <B.BoxImgPokemon>
                <B.ImgPokemon src={pokemon} alt="" />
            </B.BoxImgPokemon>
        </B.BodyContainer>
    )
}

const Footer = () => {
    const [pokemonJson, setPokemonJson] = useState<PropsPokemonJson | any>({})

    type PropsStat = {
        base_stat: number
        effort: number
        stat: {
            name: string
            url: string
        }
    }

    let stat: number[] = []

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/6/')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setPokemonJson(json) 
                for(let i = 0; i < json.stats; i++){
                    
                    stat.push(json.stats.base_stat)
                }          
                
            })
    }, [])

        console.log(stat)

    type Props = {
        hab: string
        percent: number
    }

    const habilitiesList: Props[] = [
        {
            hab: 'HP',
            percent: 12
        },
        {
            hab: 'Attack',
            percent: 38
        },
        {
            hab: 'Defense',
            percent: 12
        },
        {
            hab: 'Special Attack',
            percent: 23
        },
        {
            hab: 'Spcial Defense',
            percent: 57
        },
        {
            hab: 'Speed',
            percent: 37
        }
    ]

    return (
        <S.StatsContainer>
            <S.TitleFooter>
                <h3>Stats</h3>
            </S.TitleFooter>

            <div className="info">
                <S.UlStats>
                    {
                        habilitiesList.map((item, key) => (
                            <S.LiStats key={key}>
                                <span>{item.hab}</span>
                                <S.LevelBar level={item.percent}>.</S.LevelBar>
                            </S.LiStats>
                        ))
                    }

                </S.UlStats>
            </div>
        </S.StatsContainer>
    )
}




export const Home = () => {
    return (
        <div className='container-geral'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
