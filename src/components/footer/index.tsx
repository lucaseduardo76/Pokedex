import * as S from './style'



type PropsFooter = {
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number
    specialDefense: number
    speed: number
}

export const Footer = (data: PropsFooter) => {

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

