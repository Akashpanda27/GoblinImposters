import React from 'react'
import GIF3 from '../assets/Logoimg7.png'

import styled from 'styled-components'

const VideoContainer=styled.div`
width:100%;

video{
    width:100%;
    height:auto;
}
img{
    width:100%;
    height:auto;
}
@media (max-width: 64em){
   min-width: 40vh;
}
`
const Covervideo = () => {
    return(
        <VideoContainer> 
            { <img  src={GIF3} /> }
            {/* <video src={GIF3} types="video/mp4" autoPlay muted loop/> */}
        </VideoContainer>
        
    )
}

export default Covervideo;
