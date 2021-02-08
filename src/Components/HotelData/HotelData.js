import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 445,
        marginBottom: '20px'
    },
    media: {
        height: 240,
    },
});
const HotelData = (props) => {
    console.log(props.data)
    const classes = useStyles();
    const { image, title, type } = props.data;

    console.log(image)



    return (

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                   
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {title}
                    </Typography>
                    <p>{type}</p>
                </CardContent>
            </CardActionArea>
     
        </Card>
    );
};

export default HotelData;