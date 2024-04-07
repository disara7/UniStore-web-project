import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import styles from './item.module.css';


const Item = (props) => {
  const { id } = props;
  
  return (
    <Link to={`/Product/${id}`} style={{ textDecoration: 'none' }}>
        <Card sx={{ maxWidth: 300, borderRadius: 3, mb:1,mr:1, cursor:'pointer' }}>
          <CardMedia
            sx={{ height: {md:200, sm:150, xs:100} }}
            image={props.image}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div" 
            sx={{
              maxHeight: '3em', 
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical',
            }}>
              {props.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              {props.new_price}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through',fontSize:'12px' }}>
              {props.old_price}
            </Typography>
            <div className="itemIcon">
                <i className="fa-solid fa-arrow-right"></i>
            </div>
          </CardActions>
        </Card>
      </Link>
  )
}

export default Item