import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section=styled.section`
min-height:100vh;
height:auto;
width:100vw;
background-color:${props=>props.theme.text};
position:relative;
color:${props=>props.theme.body};
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

const Title=styled.h1`
font-size:${props=>props.theme.fontxxl};
text-transform:uppercase;
color:${props=>props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${(props)=>props.theme.body};
width: fit-content;

@media (max-width: 48em){
font-size:${props=>props.theme.fontxl};
}

`;
const Container=styled.div`
width:75%;
margin:2rem auto;
display:flex;
justify-content:space-between;
align-items:center;

@media (max-width: 64em){
    width: 80%;
}

@media (max-width: 48em){
    width: 90%;
    flex-direction: column;

    &>*:last-child{
        &>*:first-child{
            margin-top:0;
        }
    }
}
`

const Box=styled.div`
width:45%;
@media (max-width: 64em){
    width: 90%;
    align-self: center;
}

`
const Faq = () => {
    const ref=useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(()=>{
        let element=ref.current;
        ScrollTrigger.create({
            trigger: element,
            start:'top top',
            end:'bottom top',
            pin:true,
            pinSpacing:false,
            scrub:true,
            //markers:true,
        })
        return ()=>{
            ScrollTrigger.kill();
        };
    },[])
    return(
        <Section ref={ref} id="faq">
            <Title>Faq</Title>
            <Container>
            <Box>
            <Accordion title="How much is an Ethpanda NFT?">
            Fire Sale ( WL ) members may mint an Ember for 0.1 ETH.<br/>
            Public Sale will be a Dutch Auction that will decrease from a maximum of 0.3 ETH to a minimum of 0.15 ETH.
             </Accordion>  
             <Accordion title="How many Eth panda NFTs are there in circulation??">
             There are a total of 3,333 total Pandas.
             </Accordion>   
             <Accordion title="When is mint?">
             Our Fire Sale mint is on March 26, 2022 7:00 PM UTC<br/>
            Our Public Sale mint is on March 27, 2022 7:00 PM UTC
             </Accordion>   
             <Accordion title="What Blockchain will this be launched on?">
             Ethereum 721 contract- A huge update allowing for massive savings in gas fees.
            </Accordion> 
            </Box>
            <Box>
            <Accordion title="Where can I view my Ethpanda NFTS??">
            Once minted or bought simply connect to your OpenSea account.
            {/* Once you mint your Ethpanda NFT, you will be able to see it by connecting your crypto wallet to OpenSea. */}
             </Accordion>   
             <Accordion title="What utility is offered?">
             Staking, Giveaways, Charity, DAO, Airdrops, Collaborations, WL for upcoming projects.
             </Accordion>   
             <Accordion title="How many Embers can I mint?">
             Fire Sale members can mint 1 Ember during the Fire Sale.<br/>
             Standard Sale can mint 2 Embers per TXN.
             </Accordion>
             <Accordion title="When will we be able to see rarity and where?">
             Post Launch and after the reveal, rarity characteristics will be available on opensea.
            </Accordion>   
            </Box>
            </Container>
        </Section>
    )
}

export default Faq;
