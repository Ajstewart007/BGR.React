import "./Home.css";
import React from "react";
import { Link } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel';
import { ListItem, Paper } from '@mui/material';
import img1 from '../../resources/Gloomhaven.png';
import img2 from '../../resources/BrassBirmingham.png';
import img3 from '../../resources/Pandemic.png';
import Hero from "../hero/Hero";
import LoginButton from "../login/LoginButton";
import LogoutButton from "../login/LogoutButton";
import Profile from "../Profile/ProfileDisplay";
import { Button, Container } from "react-bootstrap";

const Home = () => {
    return(
        <div>
        <Container>
            <Carousel className='carousel'>                       
                            <ListItem className='carousel-card'>
                                <img className='img' src={img1}/>
                            </ListItem>

                            <ListItem className='carousel-card'>
                                <img className='img' src={img2}/>
                            </ListItem>

                            <ListItem className='carousel-card'>
                                <img className='img' src={img3}/>
                            </ListItem>                
            </Carousel>
        </Container>
        <h1>Find your next favourite Game!</h1>

        </div>
        
    )
}

export default Home