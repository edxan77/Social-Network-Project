import { Box } from "@mui/system";
// import { Typography } from "@mui/material";s
import Event from './Event';

function Events(){
    return (
        <div style={{marginBottom:"150px"}}>
            {/* <Typography variant="h4" color="text.secondary" style={{marginTop:'0px'}}>
               Interesting Events
            </Typography> */}
            <Box sx={{
                width:'1000px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:'20px',
                flexWrap:'wrap',
                boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                borderRadius:'20px',
                backgroundColor:'#fff',
                margin:'100px auto',
                padding:'40px 20px',
                marginBottom:'100px',
                zIndex:'-1'
            }}>
                <Event src="/static/images/cards/contemplative-reptile.jpg" title='Lizard' 
                    desc=' Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica'
                />
                <Event src="/static/images/cards/contemplative-reptile.jpg" title='Lizard' 
                    desc=' Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica'
                />
                <Event src="/static/images/cards/contemplative-reptile.jpg" title='Lizard' 
                    desc=' Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica'
                />
                <Event src="/static/images/cards/contemplative-reptile.jpg" title='Lizard' 
                    desc=' Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica'
                />
                <Event src="/static/images/cards/contemplative-reptile.jpg" title='Lizard' 
                    desc=' Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica'
                />
            </Box>
        </div>
        
      );
}

export default Events;