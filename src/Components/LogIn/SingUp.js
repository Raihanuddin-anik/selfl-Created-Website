import './LogIn.css'
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { FaGoogle } from "react-icons/fa";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { useState } from 'react';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    root2: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60ch',
            height: '4.5ch',           
        
           

        },
    },
    root3: {
        textAlign: 'center',
    }
}));

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const SingUp = () => {
    const classes = useStyles();
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        confirmPassword: ''
    })
    const [newUser, setnewUser] = useState(true)
    console.log(user)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    var provider = new firebase.auth.GoogleAuthProvider();
    const SingInWithGooglePopUp = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                var user = result.user;
                setloggedInUser(user)
                history.replace(from)

                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const handleCheckEmail = (e) => {

        let isFormValid = true;

        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isFormValid)

        }
        if (e.target.name === "password") {
            const isPasswordvalid = e.target.value.length > 6;
            const isPasswordNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordvalid && isPasswordNumber;
        }
        if (e.target.name === "confirmPassword" ) {

         
            if (e.target.value === user.password) {
                isFormValid = true;
            }
            else {
                alert("Passwod Not match")
                console.log("Password did not match")
            }

        }
        if (isFormValid) {
            const NewUserInfo = { ...user };
            NewUserInfo[e.target.name] = e.target.value;
            setUser(NewUserInfo);
        }
    }

    const SingUpAndIn = (e) => {
       if(  user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            setloggedInUser(user)
            console.log(user)
           
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
        });
       }
       if(user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          setloggedInUser(user)
          history.replace(from)
          console.log(user)
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
        });
       }
     
        e.preventDefault();
    }
    const [hideInputField, setHideInputField] =useState(false)
    const hideField = () => {
        document.getElementById("input1").style.display = "none";
        document.getElementById("input2").style.display = "none";
        setHideInputField(true)
    }
    const showField = () =>{
        document.getElementById("input1").style.display ="block"
        document.getElementById("input2").style.display ="block"
        setHideInputField(false)
    }
    return (

        <div className={classes.root}>
            <Paper className={classes.paper}>
                <form onSubmit={SingUpAndIn}>
                    <Grid id="frid" container spacing={2} className={classes.root2}>

                        <input
                            id="input1"
                            placeholder="Name" />
                        <input
                            id="hide2"
                            placeholder="Email"
                            name='email'
                            required
                            onBlur={handleCheckEmail} />
                        <input
                        id=""
                        placeholder="Password"
                          name="password"
                          required
                          onBlur={handleCheckEmail}
                        />
                      
                        <input
                            id="input2"
                            placeholder="Confirm Password"
                            name='confirmPassword'
                           
                            onBlur={handleCheckEmail}
                        />

                        <Button fullWidth type="submit" variant="contained" color="primary">{!hideInputField? "Sing Up" : "logIn"}</Button>
                        <Button variant="contained" color="secondary" onClick={SingInWithGooglePopUp}>  <FaGoogle /> &nbsp; Sing In With Google</Button>
                    </Grid>
                </form>

               {hideInputField == false ? <p className={classes.root3}>Already have an Account? 
               <a href="#" onClick={() => hideField()}>Login</a></p> :<p>Not Have an Account? <a href="#" onClick={()=>showField()}>SingUp</a> </p>}
            </Paper>
        </div>
    );
};

export default SingUp;