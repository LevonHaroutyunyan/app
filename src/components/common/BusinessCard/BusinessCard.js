import React, { useCallback } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 345,
    height: 345,
    margin: 12,
  },
  media: {
    height: 140,
  },
});

function BusinessCard(props) {
  const {
    data,
    handleAddToFavorites: propsHandleAddToFavorites,
    handleRemoveFromFavorites: propsHandleRemoveFromFavorites
  } = props;

  const classes = useStyles();

  const handleAddToFavorites = useCallback(() => {
    propsHandleAddToFavorites(data);
  }, [data, propsHandleAddToFavorites]);

  const handleRemoveFromFavorites = useCallback(() => {
    propsHandleRemoveFromFavorites(data.id);
  }, [data, propsHandleRemoveFromFavorites]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {data.display_phone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Address: {data.location && data.location.display_address.join(' ')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {data.isAddedToFavorites ? (
          <Button
            onClick={handleRemoveFromFavorites}
            size="small"
            color="secondary"
          >
            Remove from favorites
          </Button>
        ) : (
          <Button
            onClick={handleAddToFavorites}
            size="small"
            color="primary"
          >
            Add to favorites
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default BusinessCard;
