import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import img1 from '../assets/LogoFinal.svg'
import "../components/Style.css";
const LogoText=styled.h1`
font-family: "Blaka", cursive;
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;
&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
font-size: ${props => props.theme.fontxxl};
}
`
const Logo = () => {
    return(
        <LogoText>
                {/* gb killers */}
                
                <img className="Logophoto" src={img1} />

        </LogoText>
    )
}

export default Logo;