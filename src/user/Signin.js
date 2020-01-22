import React, { useState } from 'react'
import { makeStyles, TextField, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { Link, Redirect } from 'react-router-dom'
import { signin } from '../auth'
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




const Signin = () => {
    const classes = useStyles()
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToRefer: false
    });

    const { email, password, error, redirectToRefer, loading } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
        console.log(values)
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                } else {
                    setValues({ ...values, redirectToRefer: true })
                }
            })
    }
    const showError = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
                {error}
            </div>
        );
    }
    const redirectUser = () => {
        if (redirectToRefer) {
            return <Redirect to='/signup' />
        }
    }
    const signInForm = () => {
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h5>Login form</h5>
                            <form >
                                <div >
                                    <div style={{ flexDirection: 'column' }} >
                                    </div>
                                    <div style={{ flexDirection: 'column', marginTop: '10px' }}>
                                        <TextField
                                            style={{ width: '400px' }}
                                            label="email"
                                            id="outlined-size-small"
                                            variant="outlined"
                                            size="small"
                                            value={email}
                                            onChange={handleChange('email')}

                                        />
                                    </div>
                                    <div style={{ flexDirection: 'column', marginTop: '10px' }}>
                                        <TextField
                                            style={{ width: '400px' }}
                                            label="Password"
                                            id="outlined-size-small"
                                            variant="outlined"
                                            size="small"
                                            value={password}
                                            onChange={handleChange('password')}

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

    return (
        <div align='center' style={{ marginTop: '10px' }}>
            <div className={classes.root}>
                <Grid item xs={12} >
                    <Grid item xs={4}>
                        <p > {signInForm()}</p>
                        <p>{showError()}</p>
                        <p>{redirectUser()}</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Signin