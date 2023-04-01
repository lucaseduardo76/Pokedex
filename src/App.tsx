import { useEffect, useState } from 'react'
import { Header } from './components/header' 
import { Body } from './components/body'
import { Footer } from './components/footer'
import { SwitchBackgroundColor } from './interface/colorSelector/switchColor'
import * as G from './style'


type PropsPokemonJson = {
    name: string
    weight: string
    height: string
}

export const App = () => {
    const [change, setChange] = useState(1)

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
        setChange(change + 1)
        
       
    }

    const handleclickprev = (): void => {
        if (change > 1) {
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
                setType(json.types[0].type.name)             
                setHp(json.stats[0].base_stat)
                setAttack(json.stats[1].base_stat)
                setDefense(json.stats[2].base_stat)
                setSpecialAttack(json.stats[3].base_stat)
                setSpecialDefense(json.stats[4].base_stat)
                setSpeed(json.stats[5].base_stat)
                setPokemonJson(json)
                setAbility(json.abilities[0].ability.name)

                

            })
    }, [change])

    useEffect(()=>{
        setBackground(SwitchBackgroundColor(type))

        console.log(background)
    }, [change, type])

    

    return (
        <G.GeneralContainer background={background}>
            <G.CentralContainer>
                <Header />

                <Body
                    json={pokemonJson}
                    ability={ability}
                    functionNext={handleclicknext}
                    functionPrev={handleclickprev}
                    elemento={type}
                    imgId={change}
                />

                <Footer
                    hp={hp}
                    attack={attack}
                    defense={defense}
                    specialAttack={specialAttack}
                    specialDefense={specialDefense}
                    speed={speed}

                />
            </G.CentralContainer>
        </G.GeneralContainer>
    )
}

