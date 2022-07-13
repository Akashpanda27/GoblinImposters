import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import temp from '../assets/temp6.jpg';
import img1 from '../assets/Nfts/image1.png';
import img2 from '../assets/Nfts/image2.png';
import img3 from '../assets/Nfts/image3.png';
import img4 from '../assets/Nfts/image4.png';
import img5 from '../assets/Nfts/image5.png';
import img6 from '../assets/Nfts/image6.png';
import img7 from '../assets/Nfts/image7.png';

import Arrow from '../assets/Arrow.svg';

const Container=styled.div`
width:25vw;
height:60vh;

@media (max-width:70em){
    height: 60vh;
}
@media (max-width:64em){
    height: 50vh;
    width: 30vw;
}

@media (max-width:48em){
    height: 50vh;
    width: 40vw;
}
@media (max-width:30em){
    height: 50vh;
    width: 60vw;
}
.swiper{
    width:100%;
    height:100%;
}

.swiper-slide{
    background-color:${props=>props.theme.text};
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;

    img{
        display:block;
        width: 100%;
        height: auto;
        object-fit:cover;
    }
}

.swiper-button-next{
    color:${props=>props.theme.text};
    right:0;
    top:60%;
    width: 4rem;
    background-image:url(${Arrow});
    background-position:center;
    background-size:cover;

    &:after{
        display:none;
    }
    @media (max-width:64em){
        width: 3rem;
    }
    @media (max-width:30em){
        width: 2rem;
    }
}

.swiper-button-prev{
    color:${props=>props.theme.text};
    left:0;
    top:60%;
    width: 4rem;
    transform:rotate(180deg);
    background-image:url(${Arrow});
    background-position:center;
    background-size:cover;

    &:after{
        display:none;
    }

    @media (max-width:64em){
        width: 3rem;
    }
    @media (max-width:30em){
        width: 2rem;
    }
}
`
const Carousel = () => {
    return(
        <Container> 
            <Swiper
            autoplay={{
                delay:2000,
                disableOnInteraction:false,
            }}
            pagination={{
                type:'fraction'
            }}
            scrollbar={{
                draggable:true
            }}
            navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="goblin imposters" /> </SwiperSlide>
        <SwiperSlide><img src={img2} alt="goblin imposters" /> </SwiperSlide>
        <SwiperSlide><img src={img3} alt="goblin imposters" /> </SwiperSlide>
        <SwiperSlide><img src={img4} alt="goblin imposters" /> </SwiperSlide>
        <SwiperSlide><img src={img5} alt="goblin imposters" /> </SwiperSlide>
        <SwiperSlide><img src={img6} alt="goblin imposters" /> </SwiperSlide>
        <SwiperSlide><img src={img7} alt="goblin imposters" /> </SwiperSlide>
      </Swiper>
        </Container>
    )
}

export default Carousel;
