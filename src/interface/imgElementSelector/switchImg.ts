import bug from './../../assets/elements/bug.svg'
import dark from './../../assets/elements/dark.svg'
import dragon from './../../assets/elements/dragon.svg'
import electric from './../../assets/elements/electric.svg'
import fairy from './../../assets/elements/fairy.svg'
import fighting from './../../assets/elements/fighting.svg'
import fire from './../../assets/elements/fire.svg'
import flying from './../../assets/elements/flying.svg'
import ghost from './../../assets/elements/ghost.svg'
import grass from './../../assets/elements/grass.svg'
import ground from './../../assets/elements/ground.svg'
import ice from './../../assets/elements/ice.svg'
import normal from './../../assets/elements/normal.svg'
import poison from './../../assets/elements/poison.svg'
import psychic from './../../assets/elements/psychic.svg'
import rock from './../../assets/elements/rock.svg'
import shadow from './../../assets/elements/shadow.svg'
import steel from './../../assets/elements/steel.svg'
import water from './../../assets/elements/water.svg'
import unknow from './../../assets/elements/unknow.svg'


export const SwitchElementImg = (elemento: string): string =>{
    
    let img: string;

    switch (elemento) {
        case 'fire':
            img = fire
        break;
        
        case 'grass':
            img = grass 
        break;

        case 'steel':
            img = steel
        break;
        
        case 'water':
            img = water
        break;

        case 'psychic':
            img = psychic
        break;

        case 'ground':
            img = ground
        break;

        case 'ice':
            img = ice
        break;

        case 'flying':
            img = flying
        break;

        case 'ghost':
            img = ghost
        break;

        case 'normal':
            img = normal
        break;

        case 'poison':
            img = poison
        break;

        case 'rock':
            img = rock
        break;

        case 'fighting':
            img = fighting
        break;

        case 'dark':
            img = dark
        break;

        case 'dragon':
            img = dragon
        break;

        case 'bug':
            img = bug
        break;

        case 'electric':
            img = electric
        break;

        case 'fairy':
            img = fairy
        break;

        case 'shadow':
            img = shadow
        break;
    
        case 'unknow':
            img = unknow
        break;
    
        default:
            img = unknow
        break;
    }

    return img
}
