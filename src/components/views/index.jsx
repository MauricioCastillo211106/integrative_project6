import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Login from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import Navbar_Account from './NavBar_Account';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '98vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'Dark' ? theme.palette.grey[100] : theme.palette.grey[1000],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(15, 5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.grey[900]
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide() {
    const classes = useStyles();
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();


    const [showPassword, setShowPassword] = useState(false);





    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    };


    const onSubmit = value => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
          "email": value.email,
          "password": value.password
        });
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
    
        fetch("http://localhost:3000/api/user/login", requestOptions)
          .then(response => response.json())
          .then(result => {
            switch (result.error) {
              case "Usuario no encontrado":
                Swal.fire({
                  title: 'Error!',
                  text: 'Usuario no encontrado',
                  icon: 'error',
                  confirmButtonText: 'Cool'
                })
                break;
              case "Usuario no verificado":
                Swal.fire({
                  title: 'Error!',
                  text: 'Usuario no verificado',
                  icon: 'error',
                  confirmButtonText: 'Cool'
                })
              break;
              case "contraseña no válida":
                Swal.fire({
                  title: 'Error!',
                  text: 'contraseña no válida',
                  icon: 'error',
                  confirmButtonText: 'Cool'
                })
              break;
    
              default:
                navigate('/dashboard');
                break;
            }
        })
          .catch(error => console.error);
    
    
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
                        <Login/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate
                          method="POST"
                          onSubmit={handleSubmit(onSubmit)}
                          autoComplete={"off"}
                    >
                        <TextField

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
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <div className="error-input-email">{errors.email && <p>{errors.email.message}</p>}</div>

                        <div>
                        <div className="input-group">
                            <button id="ojo"
                                    type="button"


                                    className="btn btn-outline-dark  btn-sm"
                                    onClick={(e) => togglePassword(e)}
                            >
                                <i
                                    className={showPassword ? "far fa-eye" : "far fa-eye-slash"}
                                ></i>{" "}
                            </button>
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
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoComplete="current-password"
                            />




                            </div>
                            <div className="error-input-password">{errors.password && <p>{errors.password.message}</p>}</div>

                        </div>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/forgot-password" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/sign-up" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <div className="button-FormLogin">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign in
                            </Button>
                        </div>

                        <Box mt={5}>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid></>
    );

}
