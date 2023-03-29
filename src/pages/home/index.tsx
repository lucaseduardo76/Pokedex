import { useEffect, useState } from 'react'
import './style.css'
import './styleFooter.css'
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

const Main = () => {

    

    

    return (
        <B.BodyContainer>

            <B.Number>
                <B.SpanNumber>#004</B.SpanNumber>
            </B.Number>

            <B.ArrowContainer>
                <B.BoxArrow>
                    <B.LeftArrow src={arrow}  alt="LEFT ARROW" />
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
                        <B.PokemonName>Charmander</B.PokemonName>
                    </div>
                </B.TitleBox>

                <B.Description>
                    pokemon de fogo que parece um filhote de dragão
                </B.Description>

                <div>
                    <B.UlFeature>

                        <B.LiFeature>
                            <span>Height</span>
                            <span>0.6 M</span>
                        </B.LiFeature>

                        <B.LiFeature>
                            <span>Weight</span>
                            <span>8.5 kg</span>
                        </B.LiFeature>

                        <B.LiFeature>
                            <span>Category</span>
                            <span>Lizard</span>
                        </B.LiFeature>

                        <B.LiFeature>
                            <span>abilities</span>
                            <span>Blaze</span>
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

    type Props = {
        hab: string
        percent: number
    }

    const habilitiesList: Props[] = [
        {
            hab: 'HP',
            percent: 5
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
