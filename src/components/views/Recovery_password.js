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
import Form from "../../utilities/Forms";



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

export default function Forgot() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [validPass, setValidPass] = useState("");
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": email,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };


    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true,
            },
            password: {
                value: password,
                isRequired: true,
                minLength: 8,
            },
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors,
            });

            isValid = false;
        }
        return isValid;
    };

    const register = (e) => {
        e.preventDefault();

        const validate = validateRegister();

        if (validate) {
            setValidate({});
            setEmail("");
            setPassword("");

        }
    };

    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    };
    const togglePassword2 = (e) => {
        if (showPassword2) {
            setShowPassword2(false);
        } else {
            setShowPassword2(true);
        }
    };


    const login = async () => {
        if (validPass === password){
        fetch("http://localhost:3000/api/user/update", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log('error', error));
            alert("Successfully Register User");
            window.location.href = "/Dashboard";
        }else {
            alert("Las contraseñas no coinciden")
        }
    };
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <Login/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Recovery-Password
                    </Typography>
                    <form className={classes.form} noValidate
                          method="POST"
                          onSubmit={register}
                          autoComplete={"off"}
                    >
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
                                className={`form-control ${
                                    validate.validate && validate.validate.password ? "is-invalid " : ""
                                }`}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />



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
                        <div className="input-group">
                            <button id="ojo"
                                    type="button"


                                    className="btn btn-outline-dark  btn-sm"
                                    onClick={(e) => togglePassword2(e)}
                            >
                                <i
                                    className={showPassword2 ? "far fa-eye" : "far fa-eye-slash"}
                                ></i>{" "}
                            </button>
                            <TextField
                                className={`form-control ${
                                    validate.validate && validate.validate.password ? "is-invalid " : ""
                                }`}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="ValidatePassword"
                                label="Validate Password"
                                type={showPassword2 ? "text" : "password"}
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setValidPass(e.target.value)}
                            />



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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => {

                                login()

                            }}
                        >
                            Sign in
                        </Button>

                        <Box mt={5}>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );

}
