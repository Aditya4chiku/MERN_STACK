import React, { useState } from 'react'
import { makeStyles, TextField, Button, Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { signup } from '../auth'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Signupp = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
        console.log(values)
    };

    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false })
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({ ...values, name: '', email: '', password: '', error: '', success: true })
                }
            })
    }

    const classes = useStyles()

    const signUpForm = () => {
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h5>Login form</h5>
                            <form >
                                <div >
                                    <div style={{ flexDirection: 'column' }} >
                                        <TextField
                                            style={{ width: '400px' }}
                                            label="name"
                                            id="outlined-size-small"
                                            variant="outlined"
                                            size="small"
                                            onChange={handleChange('name')}
                                            value={name}

                                        />
                                    </div>
                                    <div style={{ flexDirection: 'column', marginTop: '10px' }}>
                                        <TextField
                                            style={{ width: '400px' }}
                                            label="email"
                                            id="outlined-size-small"
                                            variant="outlined"
                                            size="small"
                                            onChange={handleChange('email')}
                                            value={email}
                                        />
                                    </div>
                                    <div style={{ flexDirection: 'column', marginTop: '10px' }}>
                                        <TextField
                                            style={{ width: '400px' }}
                                            label="Password"
                                            id="outlined-size-small"
                                            variant="outlined"
                                            size="small"
                                            onChange={handleChange('password')}
                                            value={password}
                                        />
                                    </div>
                                    <Button
                                        onClick={clickSubmit}
                                        style={{ width: '400px', marginTop: '10px' }}
                                    >
                                        Submit
                                </Button>
                                </div>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }


    const showError = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
                {error}
            </div>
        );
    }

    const chek = () => {
        console.log("I am call")
    }

    const showSuccess = () => {
        return (
            <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
                New Account is Created .Please signin <Link onCLick={chek} to='/signin'>Signin</Link>
            </div>
        )
    }

    return (
        <div align='center' style={{ marginTop: '10px' }}>
            <div className={classes.root}>
                <Grid item xs={12} >
                    <Grid item xs={4}>
                        <p > {signUpForm()}</p>
                        <p >{showSuccess()}</p>
                        <p > {showError()}</p>
                    </Grid>
                </Grid>
            </div>
        </div>


    )

}
export default Signupp