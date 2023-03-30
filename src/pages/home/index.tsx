import { useEffect, useState } from 'react'
import './style.css'
import search from './../../assets/icons/search.svg'
import random from './../../assets/icons/random.svg'
import arrow from './../../assets/icons/arrow.svg'
import pokemon from './../../assets/pokemon/4.png'
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

type PropsMain = {
    json: {
        id:number
        name: string
        height: number
        weight: number
    },
    ability: string,
    functionNext: () => void,
    functionPrev: () => void,
    foto: string,
    elemento: string

}

const Main = (data: PropsMain) => {
   
   
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
                        
                    </div>

                    <div>
                        <B.ElementName>{data.elemento}</B.ElementName>
                        <B.PokemonName>{data.json.name}</B.PokemonName>
                    </div>
                </B.TitleBox>

                <B.Description>
                    pokemon de fogo que parece um filhote de dragão
                </B.Description>

                <div>
                    <B.UlFeature>

                        <B.LiFeature>
                            <span>Height</span>
                            <span>{data.json.height/10} M</span>
                        </B.LiFeature>

                        <B.LiFeature>
                            <span>Weight</span>
                            <span>{data.json.weight/10} kg</span>
                        </B.LiFeature>

                        <B.LiFeature>
                            <span>abilities</span>
                            <span>{data.ability}</span>
                        </B.LiFeature>

                    </B.UlFeature>
                </div>

            </B.PokeInfo>

            <B.BoxImgPokemon>
                <B.ImgPokemon src={data.foto} alt="" />
            </B.BoxImgPokemon>
        </B.BodyContainer>
    )
}

type PropsFooter = {
    hp: number,
    attack:number,
    defense: number,
    specialAttack: number
    specialDefense: number
    speed: number
}

const Footer = (data: PropsFooter) => {
    
    type Props = {
        hab: string,
        percent: number
    }

    const habilitiesList: Props[] = [
        {
            hab: 'HP',
            percent: data.hp
        },
        {
            hab: 'Attack',
            percent: data.attack
        },
        {
            hab: 'Defense',
            percent: data.defense
        },
        {
            hab: 'Special Attack',
            percent: data.specialAttack
        },
        {
            hab: 'Special Defense',
            percent: data.specialDefense
        },
        {
            hab: 'Speed',
            percent: data.speed
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



type PropsPokemonJson = {
    name: string
    weight: string
    height: string
}

export const Home = () => {
    const [change, setChange] = useState(1)

    const [hp, setHp] = useState<number>(0);
    const [attack, setAttack] = useState<number>(0);
    const [defense, setDefense] = useState<number>(0);
    const [specialAttack, setSpecialAttack] = useState<number>(0);
    const [specialDefense, setSpecialDefense] = useState<number>(0);
    const [speed, setSpeed] = useState<number>(0);

    
    const [pokemonJson, setPokemonJson] = useState<PropsPokemonJson | any>({})
    const [ability, setAbility] = useState('')
    const [sprite, setSprite] = useState('')
    const [type, setType] = useState('')

    const handleclicknext = (): void =>{
        setChange(change + 1)
    }

    const handleclickprev = ():void =>{
        if(change > 1){
            setChange(change - 1)
        }
    }
    
    

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${change}/`)
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
                
                setPokemonJson(json)
                setAbility(json.abilities[0].ability.name)  

                setSprite(json.sprites.front_default)
                setType(json.types[0].type.name)
                       
                
            })
    }, [change])



    return (
        <div className='container-geral'>
            <Header />

            <Main 
                json={pokemonJson}
                ability={ability}
                functionNext={handleclicknext}
                functionPrev={handleclickprev}
                foto={sprite}
                elemento={type}
            />

            <Footer
                hp={hp}
                attack={attack}
                defense={defense}
                specialAttack={specialAttack}
                specialDefense={specialDefense}
                speed={speed}
                
            />
        </div>
    )
}
