import React from 'react';
import { useState } from 'react';
import { Button, Container, Grid, Box, Typography, Link } from '@mui/material';
import { TextField } from '@mui/material';


const Connexion = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const connexion = (e) => {
        e.preventDefault()

        setEmailError(false)
        setPasswordError(false)

        if(email === ''){
            setEmailError(true)
        }

        if(password === ''){
            setPasswordError(true)
        }

        if(email && password){
            console.log(password)
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
                            Se connecter
                        </Typography>
                        <form noValidate autoComplete='off' className='connexion-form' onSubmit={ connexion }>
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
                            <Button 
                                type='submit'
                                variant='contained'
                                fullWidth
                                sx={{
                                    marginBottom : "1rem"
                                }}
                            >
                                Connexion
                            </Button>
                        </form>
                        <Typography>
                            Si vous n'avez pas de compte, vous pouvez vous <Link href="#">inscrire</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Connexion;
