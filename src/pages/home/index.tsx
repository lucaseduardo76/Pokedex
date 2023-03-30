import { useEffect, useState } from 'react'
import './style.css'
import './styleFooter.css'
import search from './../../assets/icons/search.svg'
import random from './../../assets/icons/random.svg'
import arrow from './../../assets/icons/arrow.svg'
import pokemon from './../../assets/pokemon/2.png'
import elemento from './../../assets/elements/fire.svg'
import * as H from './styles/header'
import * as B from './styles/body'
import * as S from './styles/footer'


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
        fetch('https://pokeapi.co/api/v2/pokemon/4/')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setPokemonJson(json)
                setAbility(json.abilities[0].ability.name)                
            })
    }, [])
   
    const convertNumber = (num: number): string | number =>{
        if(num < 10){
            return `00${num}`
        }else if(num < 100){
            return `0${num}` 
        }else{
            return num
        }
    }

    return (
        <B.BodyContainer>

            <B.Number>
                <B.SpanNumber>#{convertNumber(pokemonJson.id)}</B.SpanNumber>
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
    const [hp, setHp] = useState<number>(0);
    const [attack, setAttack] = useState<number>(0);
    const [defense, setDefense] = useState<number>(0);
    const [specialAttack, setSpecialAttack] = useState<number>(0);
    const [specialDefense, setSpecialDefense] = useState<number>(0);
    const [speed, setSpeed] = useState<number>(0);
    










    type PropsStat = {
        base_stat: number
        effort: number
        stat: {
            name: string
            url: string
        }
    }

    //let stat: number[] = []

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/2/')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setPokemonJson(json) 
                setHp(json.stats[0].base_stat)
                setAttack(json.stats[1].base_stat)
                setDefense(json.stats[2].base_stat)
                setSpecialAttack(json.stats[3].base_stat)
                setSpecialDefense(json.stats[4].base_stat)
                setSpeed(json.stats[5].base_stat)   
                console.log(typeof json.stats[0].base_stat)       
                       
                
            })
    }, [])


    type Props = {
        hab: string,
        percent: number
    }

    const habilitiesList: Props[] = [
        {
            hab: 'HP',
            percent: hp
        },
        {
            hab: 'Attack',
            percent: attack
        },
        {
            hab: 'Defense',
            percent: defense
        },
        {
            hab: 'Special Attack',
            percent: specialAttack
        },
        {
            hab: 'Special Defense',
            percent: specialDefense
        },
        {
            hab: 'Speed',
            percent: speed
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
