import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { ListItem, Paper } from '@mui/material';
import img1 from '../../resources/Gloomhaven.png';
import img2 from '../../resources/BrassBirmingham.png';
import img3 from '../../resources/Pandemic.png';


const Hero = () => {
    return(
        <div>
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
        </div>
    )
}

export default Hero
