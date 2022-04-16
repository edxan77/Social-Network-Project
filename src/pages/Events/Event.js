import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Event({src, title, desc, day}){
    return (
        <Card sx={{ width: 360, height:'460px' }}>
          
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={src}
            />
              <Typography gutterBottom variant="h6" component="div">
                {day}
              </Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default Event;