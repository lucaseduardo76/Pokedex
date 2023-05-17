import { Header } from "../home/header"
import { Body } from "../home/body"
import { Footer } from "../home/footer"
import * as C from './style'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { SwitchBackgroundColor } from "../../interface/colorSelector/switchColor"
import list from './../../assets/icons/pokeball.webp'
import home from './../../assets/icons/homeIcon.svg'

type PropsPokemonJson = {
    name: string
    weight: number
    height: number
    id: number
    data?: any
}

export const Card = () => {

    const params = useParams();

    const [change, setChange] = useState<any>(1);
    const [load, setLoad] = useState<boolean>(true);
    const [linkBroke, setLinkBroke] = useState<boolean>(false);

    const [hp, setHp] = useState<number>(0);
    const [attack, setAttack] = useState<number>(0);
    const [defense, setDefense] = useState<number>(0);
    const [specialAttack, setSpecialAttack] = useState<number>(0);
    const [specialDefense, setSpecialDefense] = useState<number>(0);
    const [speed, setSpeed] = useState<number>(0);

    const [background, setBackground] = useState<string>('#151385');

    const [pokemonJson, setPokemonJson] = useState<PropsPokemonJson>({
        name: '',
        weight: 0,
        height: 0,
        id: 0
    });

    const [ability, setAbility] = useState<string>('');
    const [type, setType] = useState<string>('');

    useEffect(() => {

        axios.get<PropsPokemonJson>(`https://pokeapi.co/api/v2/pokemon/${change}/`)
            .then((response: PropsPokemonJson) => {
                const json = response.data;

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
            .catch((error: PropsPokemonJson) => {
                setLoad(false)
                setLinkBroke(true)
                console.log(error);
            });
    }, [change])

    useEffect(() => {
        setChange(params.slug)
        setBackground(SwitchBackgroundColor(type))
        console.log(type)
    }, [params, change, type])



    return (
        <C.GeneralContainer background={background} load={linkBroke}>
            <C.CentralContainer>

                <C.CadsHeader>
                    <Link to='/'>
                        <C.Icons src={home} alt="" />
                    </Link>
                    <Link to='/list'>
                        <C.Icons src={list} alt="" />
                    </Link>
                </C.CadsHeader>

                <Body
                    json={pokemonJson}
                    ability={ability}
                    functionNext={() => { }}
                    functionPrev={() => { }}
                    elemento={type}
                    imgId={change}
                    load={load}
                    arrow={false}
                />

                <Footer
                    hp={hp}
                    attack={attack}
                    defense={defense}
                    specialAttack={specialAttack}
                    specialDefense={specialDefense}
                    speed={speed}
                />
            </C.CentralContainer>
        </C.GeneralContainer>
    )
}