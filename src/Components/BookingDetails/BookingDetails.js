import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import HotelData from '../HotelData/HotelData';
import { DoneTwoTone } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),
        
        color: theme.palette.text.secondary,
        margin:'10px'
    },
    root: {
        maxWidth: 345,
        height: 140,
    },
   
}));

const BookingDetails = () => {
    const classes = useStyles();
    const { id } = useParams();

    const [hotelInfo, setHotelInfo] = useState([])
      const [name, setName] = useState([])
    useEffect(() => {

        const InfoData = fakeData.find(pd => pd.id.toString() === id);
         const hotel = InfoData.hotels;
         setName(InfoData.name)
         setHotelInfo(hotel)
        
    }, [id])
    return (
        <div className={classes.paper}>
            <h3> {name}</h3>
         { hotelInfo.map(dt=><HotelData key={dt.id} data ={dt}></HotelData>) } 

        </div>
    );
};

export default BookingDetails;