import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';


const LogIn = () => {
   const {id} = useParams()
   console.log(id)

    
    return (
     
       <div >
       
        </div>
    );
};

export default LogIn;