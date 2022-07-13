import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import Logo from'./Logo'
import Button from './Button'
import img1 from '../assets/OpenSea3.svg'
import {ethers} from 'ethers'
import img2 from '../assets/icons8-twitter.svg'


const Section= styled.section`
wisth: 100vw;
background-color: ${props=>props.theme.green};


`
const NavBar=styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: 5rem;
height: ${props => props.theme.navHeight};
margin: 0 auto;
.mobile{
    display:none;
}

@media (max-width: 64em){
.desktop{
    display:none;
}
.mobile{
    display:inline-block;
}
}
`
const Menu=styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style:none;

@media (max-width: 64em){
/* 1024px*/
position: fixed;
top: ${props=>props.theme.navHeight};
left: 0;
right: 0;
bottom:0;
width: 100vw;
height: ${props=>`calc(100vh- ${props.theme.navHeight})`};
z-index:50;
background-color: ${props=>`rgba(${props.theme.bodyRgba},0.85)`};
backdrop-filter: blur(2px);
transform: ${props=>props.click?'translateY(0)':'translateY(1000%)'};
transition: all 0.3s ease;
flex-direction: column;
justify-content: center;

touch-action: none;
}
`

const MenuIteams=styled.li`
margin: 0 1rem;
color: ${props =>props.theme.black};
font-family: "Attack Of Monster";
font-size:${props=>props.theme.fontlg};
font-weight:bold;
cursor: pointer;
&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props =>props.theme.text};
    transition width 0.3s ease;
}

&:hover::after{
    width:100%;
}

@media (max-width: 64em){
margin: 1rem 0;

&::after{
    display:none;
}

} 

`

const HamburgerMenu=styled.span`
width: ${props=>props.click?'2rem':'1.5rem'};
height: 2px;
background: ${props=>props.theme.text};
position: absolute;
top: 2rem;
left: 50%;
transform: ${props=>props.click? 'translateX(-50%) rotate(90deg)':'translateX(-50%) rotate(0deg)'};

display:none;
justify-content:center;
align-items:center;
cursor:pointer;
transition: all 0.3s ease;

@media (max-width: 64em){
    /* 1024px*/
    display: flex;
}

&::after,&::before{
    content: ' ';
    width: ${props=>props.click?'1rem':'1.5rem'};
    height: 2px;
    right:${props=>props.click?'-2px':'0'};
    background: ${props=>props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
}

&::after{
    top:${props=>props.click?'0.3rem':'0.5rem'};
    transform: ${props=>props.click?'rotate(-40deg)':'rotate(0)'};
    
}

&::before{
    bottom:${props=>props.click?'0.3rem':'0.5rem'};
    transform:${props=>props.click?'rotate(40deg)':'rotate(0)'};;
}
`
const Navigation = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const[click,setClick]= useState(false);
    const scrollTo=(id)=>{
        let element=document.getElementById(id);
        element.scrollIntoView({
            behavior:'smooth',
            block:'start',
            inline:'nearest',
        })

        setClick(!click);
    }

    
    

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
          console.log("Make sure you have Metamask installed!");
          return;
        } else {
          console.log("Wallet exists! We're ready to go!");
        }
    
        const accounts = await ethereum.request({ method: 'eth_accounts' });
    
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account: ", account);
          setCurrentAccount(account);
          setConnButtonText(accounts[0].substring(0, 6).toUpperCase()+"...."+accounts[0].substring(38).toUpperCase());
        } else {
          console.log("No authorized account found");
        }
      }

      const connectWalletHandler = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
          alert("Please install Metamask!");
        }
    
        try {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          console.log("Found an account! Address: ", accounts[0]);
          setCurrentAccount(accounts[0]);
		      setConnButtonText(accounts[0].substring(0, 6).toUpperCase()+"...."+accounts[0].substring(38).toUpperCase());
        } catch (err) {
          setErrorMessage(err);  
          console.log(err)
        }
      }

      useEffect(() => {
        checkWalletIsConnected();
      }, [])

    return(
        <Section id="navigation">
            <NavBar>
            <Logo/>
            <HamburgerMenu click={click} onClick={()=>setClick(!click)}>
                &nbsp;
            </HamburgerMenu>
            <Menu  click={click} >
                <MenuIteams onClick={()=>scrollTo('home')}> Home</MenuIteams>
                <MenuIteams onClick={()=>scrollTo('about')}> Story</MenuIteams>
                <MenuIteams> 
                <a href={"https://twitter.com/GoblinImposters"} target="_blank" rel="noreferrer" >
                { <img  src={img2} /> }
                </a>
                </MenuIteams>
                <MenuIteams>
                {/* <a href={"https://opensea.io/"} target="_blank" rel="noreferrer" >
                { <img  src={img1} /> }
                </a> */}
                { <img  src={img1} /> }
                
                </MenuIteams>
                <MenuIteams>
                <div onClick={connectWalletHandler} className="mobile">
                <Button text={connButtonText}/>
                </div>
                </MenuIteams>
            </Menu>
            <div onClick={connectWalletHandler} className="desktop">
            <Button id="change" text={connButtonText}/>
            </div>
            {errorMessage}
            </NavBar>
        </Section>
    )
}

export default Navigation;
