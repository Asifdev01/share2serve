import react from 'react'
import { Button, Stack, Typography ,Box} from '@mui/material'
import './Home.css'
import CenteredBox from '../components/ui/centeredBox'
import Cardd from '../Cardd'
import MyButton from '../components/ui/MyButton'
import { Link } from 'react-router'

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px', 
    backgroundColor: '#e0e0e0', 
    padding: '20px',
    borderRadius: '8px', 
  };
  
  const buttonStyle = {
    backgroundColor: '#87A920', 
    justifyContent: 'center',
    display: 'flex',
    color: 'white',
    padding: '10px 20px',
    mb:3,
    marginTop: '20px',
    borderRadius: '5px',
    // '&:hover': {
    //   backgroundColor: 'yellow', 
    // },
  };
  
  const textStyle = {
      fontSize: '1rem', 
      color: '#333', 
      mr:10
  };
  

  const cardData1 = [
    {
      image: "/image.png",
      title: "Food is Donated",
      body: "Venues,restaurants,hostels,stadiums or any events post excess food are donated in the share2serve"
    },
    {
      image: "/foodselecting.jpg",
      title: "Food is Filtered",
      body: "Pre-added charities distribute excess food to people in need, while leftovers go to stray animals."
    },
    {
      image: "/foodpicked.png",
      title: "Food is Picked up",
      body: "The charity, or a network of volunteers, picks up the food and serves it to hungry people."
    }
  ];

  const cardData2 = [
    {
      image: "/foodwastage.jpg",
      title: "Home Food Wastage",
      body: "A lot of food is wasted at home due to poor storage, overbuying, and uneaten leftovers, impacting both the environment and economy. Solutions like cooking classes, meal planning, and creative leftover recipes can help reduce waste." 
      },
    {
      image: "/overfood.jpg",
      title: "Overproduction and Market Imbalances",
      body: "Overproduction due to inaccurate demand or market swings causes significant food waste.Solution: Better forecasting, supply chain communication, and alternative markets. "
    },
    {
      image: "/infrafood.jpg",
      title: "Infrastructure of food wastage diversion",
      body: "Many communities lack composting and food waste processing infrastructure, sending food scraps to landfills. Solution: Invest in these facilities like share2serve where we fix these problems."
    }
  ];

function Home() {

  return (
    <>


    <Stack className='image-container'>
        {/* <h1>hiii</h1> */}

         <img className='mainimg' src={'/feedingimg10.png'} alt="feeding"/>

         <p className='overlay-text'>
            DONATE FOOD,<br/>
            CHANGE LIVES.
         </p>

      <Box>
          <p className='overlay-text2'>
            We connect food businesses with charitable organizations to rescue<br/>
            perfectly good food that would otherwise be discharged.<br/>
            <MyButton sx={{marginTop:"40px"}} children={'DONATE NOW'}/>
            <MyButton sx={{marginLeft:"20px",width: "500px",}} children={'EXPLORE OUR SERVICES →'}/>
            </p>
            
      </Box>
       

       

    </Stack>

    <Box sx={containerStyle}>
      <Typography variant="body1" sx={textStyle}>
        First login to use our services
      </Typography>
      <Link style={{ textDecoration: 'none', color: 'inherit' }}  to={'/login'}>

      <Button variant="contained" sx={buttonStyle}>
        
        Login
       
      </Button> </Link>
    </Box>

    <p className='howitworks'>
      HOW IT WORKS
    </p>

    <Cardd cards={cardData1}/>

    <CenteredBox children={
       <>
       <Typography variant='h4' textAlign={'center'}>
       FOOD FACTS
     </Typography>
     </>
    }
      />

<Box>
    <p className='text2'>
      A problem with a clear solution
    </p>
    <p className='subtext2'>
    Share2serve connects service organizations with excess food by simplifying the process of locating, verifying, and transporting these resources.
    </p>
</Box>

<Cardd cards={cardData2}/>

{/* <Box sx={{bgcolor:"#87a920"}}>
<Typography variant='h4' textAlign={'center'}>
       FOOD FACTS
     </Typography>
</Box> */}


   
    
      
    </>
  )
}

export default Home
