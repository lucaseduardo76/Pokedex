import { useEffect, useState } from 'react'
import { Header } from './components/header'
import { Body } from './components/body'
import { Footer } from './components/footer'
import { SwitchBackgroundColor } from './interface/colorSelector/switchColor'
import * as G from './style'
import pokeball from './assets/icons/pokeball.webp'


type PropsPokemonJson = {
    name: string
    weight: string
    height: string
}

export const App = () => {
    const [change, setChange] = useState(1)
    const [load, setLoad] = useState(true)
    const [linkBroke, setLinkBroke] = useState(false)

    const [hp, setHp] = useState<number>(0);
    const [attack, setAttack] = useState<number>(0);
    const [defense, setDefense] = useState<number>(0);
    const [specialAttack, setSpecialAttack] = useState<number>(0);
    const [specialDefense, setSpecialDefense] = useState<number>(0);
    const [speed, setSpeed] = useState<number>(0);

    const [background, setBackground] = useState<string>('#151385')

    const [pokemonJson, setPokemonJson] = useState<PropsPokemonJson | any>({})
    const [ability, setAbility] = useState('')
    const [type, setType] = useState('')

    const handleclicknext = (): void => {

        if (change < 1008) {
            setChange(change + 1)

        } else {
            setChange(1)
        }

    }

    const handleclickprev = (): void => {

        if (change > 1) {
            setChange(change - 1)

        } else {
            setChange(1008)
        }
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${change}/`)
            .then((response) => {
                setLoad(false)
                return response.json();
            })
            .then((json) => {
                setPokemonJson(json)
                setType(json.types[0].type.name)
                setHp(json.stats[0].base_stat)
                setAttack(json.stats[1].base_stat)
                setDefense(json.stats[2].base_stat)
                setSpecialAttack(json.stats[3].base_stat)
                setSpecialDefense(json.stats[4].base_stat)
                setSpeed(json.stats[5].base_stat)
                setPokemonJson(json)
                setAbility(json.abilities[0].ability.name)
                setLoad(true)
            })
    }, [change])

    useEffect(() => {
        setBackground(SwitchBackgroundColor(type))

    }, [change, type])

    useEffect(() => {
        if (!load) {
            setTimeout(() => {
                setLinkBroke(true)
            }, 5000);
        }else{
            setLinkBroke(false)
        }
    }, [load])

    const ChangeInput = (pokemonId: number): void => {
        /* setChange(pokemonId)*/
    }


    return (
        <div >
            <G.GeneralContainer background={background} load={load}>

                <G.CentralContainer>
                    {load &&
                        <Header inputFunction={ChangeInput} />
                    }
                    <Body
                        json={pokemonJson}
                        ability={ability}
                        functionNext={handleclicknext}
                        functionPrev={handleclickprev}
                        elemento={type}
                        imgId={change}
                        load={load}
                    />

                    {load &&
                        <Footer
                            hp={hp}
                            attack={attack}
                            defense={defense}
                            specialAttack={specialAttack}
                            specialDefense={specialDefense}
                            speed={speed}

                        />
                    }
                </G.CentralContainer>


                {!load &&                
                
                    <G.ContainerError>
                        <G.Loading src={pokeball} alt='LOADING...' />
                        {linkBroke &&
                            <G.LinkBroken>API em manutenção <br/> pule o pokemon</G.LinkBroken>
                        }
                    </G.ContainerError>
                    
                }
            </G.GeneralContainer>
        </div>
    )
}

