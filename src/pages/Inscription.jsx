import React from 'react';
import { useState } from 'react';
import { Button, Container, Grid, Box, Typography, Link } from '@mui/material';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/action/actions';

const Inscription = () => {

    const [nom, setNom] = useState('');
    const [nomError, setNomError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [inscrire, setInscrire] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer)

    console.log(user)

    const inscription = async(e) => {
        e.preventDefault()

        setNomError(false)
        setEmailError(false)
        setPasswordError(false)
        setConfirmPasswordError(false)

        if(nom === ''){
            setNomError(true)
        }

        if(email === ''){
            setEmailError(true)
        }

        if(password === ''){
            setPasswordError(true)
        }

        if(confirmPassword === ''){
            setConfirmPasswordError(true)
        }

        if(nom && email && password && confirmPassword){
            setInscrire(!inscrire)
            console.log(email+' '+password)
            fetch('/api/users/inscription', {
                method : 'POST',
                headers : {'Content-Type':'application/json'},
                body : JSON.stringify({ email , password })
            }
            )
            .then(response => 
                response.json()
            )
            .then(json =>
                // localStorage.setItem('user', JSON.stringify(json))
                dispatch(setUser(json))
            )
        }

    }

    return (
        <Container>
            <Grid container>
                <Grid item lg={6} sm={12} sx={{
                            height : "100vh",
                            display : "flex",
                            alignItems : "center",
                        }}>
                    <Box
                        sx={{
                            height : "95%",
                            width : "100%",
                            backgroundImage : "url('software.jpeg')",
                            backgroundSize : "contain",
                            backgroundRepeat : "no-repeat",
                            backgroundPosition : "center"
                        }}
                    />
                </Grid>
                <Grid item lg={6} sm={12} sx={{
                            height : "100vh",
                            display : "flex",
                            alignItems : "center"
                        }}>
                    <Box
                        sx={{
                            height : "95%",
                            width : "100%",
                            display : "flex",
                            flexDirection : "column",
                            alignItems : "center",
                            justifyContent : "center"
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                        >
                            Cr??er un compte
                        </Typography>
                        <form noValidate autoComplete='off' className='connexion-form' onSubmit={ inscription }>
                            <TextField 
                                onChange={ e => setNom(e.target.value) }
                                label="Nom"
                                variant="outlined"
                                color='secondary'
                                size="small"
                                fullWidth
                                required
                                error={ nomError }
                            />
                            <br />
                            <TextField 
                                onChange={ e => setEmail(e.target.value) }
                                label="Email"
                                variant="outlined"
                                color='secondary'
                                size="small"
                                fullWidth
                                required
                                error={ emailError }
                            />
                            <br />
                            <TextField 
                                onChange={ e => setPassword(e.target.value) }
                                label="Password"
                                variant="outlined"
                                color='secondary'
                                size="small"
                                type="password"
                                fullWidth
                                required
                                error={ passwordError }
                            />
                            <br />
                            <TextField 
                                onChange={ e => setConfirmPassword(e.target.value) }
                                label="Password(confirmation)"
                                variant="outlined"
                                color='secondary'
                                size="small"
                                type="password"
                                fullWidth
                                required
                                error={ confirmPasswordError }
                            />
                            <br />
                            <Button 
                                type='submit'
                                variant='contained'
                                fullWidth
                                sx={{
                                    marginBottom : "1rem"
                                }}
                            >
                                Inscription
                            </Button>
                        </form>
                        <Typography>
                            Si vous avez d??j?? un compte, vous pouvez vous <Link href="/connexion">connecter</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Inscription;
