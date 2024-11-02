import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export default function CardComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        mt: 4, 
      }}
    >
      <Card sx={{ maxWidth: 345, backgroundColor: 'white', color: 'darkblue' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="download.png"
            alt="MERN STACK"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'darkblue' }}>
              Sword
            </Typography>
            <Typography variant="body2" sx={{ color: 'darkblue' }}>
              A sword is a bladed weapon designed for slashing or thrusting.
              Swords are historically used in combat and as a symbol of power and honor. 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
