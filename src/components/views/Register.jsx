import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import "../../assets/css/Register.css"
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import Navbar_Account from './NavBar_Account';

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
        backgroundColor: theme.palette.grey[900],
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUpSide() {
    const navigate = useNavigate()
    const classes = useStyles();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendValiud = (value) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": value.email
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/api/user/valid", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    const onSubmit = value => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": value.name,
            "email": value.email,
            "password": value.password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/api/user/create", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result === "creado") {
                    Swal.fire({
                        title: 'registrado',
                        text: "se a registrado con exito solo verifique su cuenta le llegara un correo a su correo para confirmar",
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: "sucedio un error inesperado regrersa mas tarde",
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
        sendValiud(value)
        navigate('/');
    }


    return (
        <>
        <Navbar_Account/>
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={7} className={classes.image}/>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <AccountBoxIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <form className={classes.form} noValidate
                              method="POST"
                              onSubmit={handleSubmit(onSubmit)}
                              autoComplete={"off"}
                        >
                            <TextField
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Necesitas este campo"
                                    }
                                })}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Name"
                                label="Name"
                                type="text"
                                name="name"
                                autoComplete="Name"
                                autoFocus
                            />
                            <div className='error-input-name'>{errors.name && <p>{errors.name.message}</p>}</div>
                            <TextField
                                className={`form-control `}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Necesitas este campo"
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "El formato no es correcto"
                                    }
                                })}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="email"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"

                            />
                            <div className='error-input-email'>{errors.email && <p>{errors.email.message}</p>}</div>

                            <div>
                                <div className="input-group">
                                    <TextField
                                        className={`form-control `}
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "El campo es requerido"
                                            },
                                            minLength: {
                                                value: 8,
                                                message: "La contraseña debe tener al menos 8 caracteres"
                                            },
                                            pattern: {
                                                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$/i,
                                                message: "debe de contener mayusculas, numeros y algun caracter especial "
                                            }
                                        })}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />


                                    <div className='error-input-password'>{errors.password && <p>{errors.password.message}</p>}</div>

                                </div>



                            </div>

                            {/*                        <div className="password mb-3">
                            <div className="input-group">
                                <TextField
                                    className={`form-control ${
                                        validate.validate && validate.validate.email ? "is-invalid " : ""
                                    }`}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    autoComplete="password"
                                    autoFocus
                                    onChange={(e) => setEmail(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                />

                                <button
                                    type="button"
                                    className="btn btn-outline-primary bg-dark btn-sm"
                                    onClick={(e) => togglePassword(e)}
                                >
                                    <i
                                        className={showPassword ? "far fa-eye" : "far fa-eye-slash"}
                                    />{" "}
                                </button>

                                <div
                                    className={`invalid-feedback text-start ${
                                        validate.validate && validate.validate.password
                                            ? "d-block"
                                            : "d-none"
                                    }`}
                                >
                                    {validate.validate && validate.validate.password
                                        ? validate.validate.password[0]
                                        : ""}
                                </div>
                            </div>
                        </div>*/}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign up
                            </Button>
                            <Box mt={5}>
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
        );
    }

