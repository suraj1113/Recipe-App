import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  })
      (({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));

const Recipe = ({ title, calories, image, ingredients }) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
        
    
    <div>
      <Card sx={{ maxWidth: 330 }}>
      <CardHeader
        title={title}
        subheader={
          <>
            <span>Calories: </span>
            {Math.trunc(calories)}
          </>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
        Ingredients
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon />
        </ExpandMore>

      </CardActions> */}
      <CardContent>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography variant="body2" color="text.secondary">
      Ingredients
    </Typography>
    <CardActions disableSpacing style={{ padding: 0 }}>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
  </div>
</CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
              {ingredients.map((ingredient, index) => ( // Added 'index' as the second argument
                 <li key={index}>{ingredient.text}</li> // Added 'key' prop to <li>
              ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
      {/* <p>{title}</p>
      <p>{calories}</p>
      <img src={image} alt="" />
      <ol>
        {ingredients.map((ingredient, index) => ( // Added 'index' as the second argument
          <li key={index}>{ingredient.text}</li> // Added 'key' prop to <li>
        ))}
      </ol> */}
    </div>
  );
};

export default Recipe;
