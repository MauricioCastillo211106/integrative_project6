


import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Form from "../../utilities/Forms";
import "../../assets/scss/Register.css"
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../../assets/scss/Prueba.css"
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(10, 5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const FormConfirmUser = () => {
    const classes = useStyles();
    const querystring = window.location.search
    const params = new URLSearchParams(querystring)

    const update = () =>{


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": params.get('email')
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/user/estado", requestOptions)
            .then(response => response.text())
            .then(result => {
                Swal.fire({
                    title: 'verificado',
                    text: 'se a verificado correctamente ya puede iniciar sesion',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'se prudujo un erro regrese mas tarde',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
    }

    return(

        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccountBoxIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" className="titulo">
                        Validate
                    </Typography>

                    <div className='justify-content-center align-items-center' >
                    <div className='title-FormConfirmUser'><h1>Confirm</h1></div>
                        <div className='a'><p className="p">accept terms and conditions</p></div>
                    <div className='button-FormConfirmUse '><button onClick={() => {update()}} id="accept" className="btn btn-primary btn-lg center"><h2>Accept</h2></button></div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );

}
export default FormConfirmUser;