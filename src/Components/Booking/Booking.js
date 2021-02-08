import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import fakeData from '../../fakeData'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root2: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
}));


const Booking = () => {
    const classes = useStyles();
    const { id } = useParams();
    console.log(id)
    const [selectedDate, setSelectedDate] = useState({
        CheekIn: new Date(),
        CheckOut: new Date()
    })
    const handleCheckInDate = (date) => {

        const newDatesIn = { ...selectedDate.CheekIn }
        newDatesIn.CheekIn = date
        setSelectedDate(newDatesIn)
    };

    const handleCheckOutDate = (date) => {
        const newDatesOut = { ...selectedDate }
        newDatesOut.CheekOut = date
        setSelectedDate(newDatesOut)
    };


    const [paramsInfo, setparamsInfo] = useState({
        Destination: '', Description: '', Origin: ''
    });
    
  
    useEffect(() => {
        const InfoData = fakeData.find(pd => pd.id.toString() === id);
        const destination = InfoData.name;
        const description = InfoData.description;
        const ParamsData = { Destination: destination, Description: description }

        setparamsInfo(ParamsData)
    }, [id])

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h1>{paramsInfo.Destination}</h1>
                        <p>{paramsInfo.Description}...</p>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <form className={classes.root2} noValidate autoComplete="off">
                            <TextField
                                id="standard-full-width"
                                label="Origin" />
                            <TextField
                                id="standard-full-width"
                               
                                value={paramsInfo.Destination}
                                />
                             
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                               
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                        value={selectedDate.CheekIn}
                                        onChange={handleCheckInDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="MM/dd/yyyy"
                                        value={selectedDate.CheekOut}
                                        onChange={handleCheckOutDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date', }}  />                                     
           
                            </MuiPickersUtilsProvider>
                                    <Link to={`/bookingDetails/${id}`} className={classes.root2} >                                
                                        <Button variant="contained" color="primary" type="submit">
                                         Submit
                                        </Button>
                                    </Link>
                        </form>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
};

export default Booking;