import { useState } from "react";


export const SwitchBackgroundColor = (elemento: string): string =>{
    
    let color: string;

    switch (elemento) {
        case 'fire':
            color = '#ff7402'                
        break;
        
        case 'grass':
            color = '#33a165' 
        break;

        case 'steel':
            color = '#00858a'
        break;
        
        case 'water':
            color = '#0050ac'
        break;

        case 'psychic':
            color = '#c90086'
        break;

        case 'ground':
            color = '#c90086'
        break;

        case 'ice':
            color = '#c90086'
        break;

        case 'flying':
            color = '#5d4e75'
        break;

        case 'ghost':
            color = '#4d5b64'
        break;

        case 'normal':
            color = '#753845'
        break;

        case 'poison':
            color = '#7e0058'
        break;

        case 'rock':
            color = '#6e1a00'
        break;

        case 'fighting':
            color = '#634136'
        break;

        case 'bug': 
            color = '#332165'
        break;

        case 'dark':
            color = '#272625'
        break;

        case 'dragon':
            color = '#7e0058'
        break;

        case 'electric':
            color = '#bba909'
        break;

        case 'fairy':
            color = '#d31c81'
        break;

        case 'shadow':
            color = '#29292c'
        break;
    
        case 'unknow':
            color = '#757575'
        break;
    
        default:
            color = '#333'
        break;
    }

    return color
}
