import { AppBar, Avatar, Box, Button, Card, Container, Grid, Input, Link, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {

    const questions = useSelector(state => state.questionReducer.questions)
    
    useEffect(() => {
        
    }, []);

    //pour le design

    const listItem = [
        {
            title : "react",
            questionNumber : 3
        },
        {
            title : "react",
            questionNumber : 3
        },
        {
            title : "react",
            questionNumber : 3
        },
        {
            title : "react",
            questionNumber : 3
        }
    ]

    return (
        <div>
        <Container>
            <AppBar
                position='static'
            elevation={0}
                sx={{
                    backgroundColor : "#fff"
                }}
            >
                <Toolbar>
                    <Link to="/"
                        sx={{
                            textDecoration : "none",
                            cursor : "pointer"
                        }}
                    >
                        <Typography 
                            color="#304ffe"
                            variant="h5"
                        >
                            StephLand
                        </Typography>
                    </Link>
                    <Avatar
                        src='/avatar.jpeg'
                        sx={{
                            cursor : "pointer",
                            marginLeft : "auto",
                            marginRight : "8px"
                        }}
                    />
                    <Typography
                        color="coral"
                        sx={{
                            cursor : "pointer",
                        }}
                    >
                        Steph
                    </Typography>
                    <Button
                        href="/connexion"
                        sx={{
                            marginLeft : "1rem",
                        }}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Container>
        <Box
            sx={{
                backgroundColor : "#2979ff",
            }}
        >
            <Typography
                variant="h3"
                color="#fff"
                align="center"
                sx={{
                    paddingTop : "2rem",
                    paddingBottom : "0.5rem"
                }}
            >
                Questions
            </Typography>
            <Typography
                color="#fff"
                align="center"
                sx={{
                    paddingBottom : "1rem"
                }}
            >
                Ce forum est ouvert à toutes les questions liées à la programmation.<br />
                (PHP, Javascript, Java, C++, Ruby, Firebase, C, React, Dart, Julia...)
            </Typography>
            <Container>
            <Input 
                type="search"
                elevation={0}
                placeholder="Rechercher des questions" 
                fullWidth
                sx={{
                    height : "50px",
                    marginBottom : "2rem",
                    backgroundColor : "#fff",
                    padding : "0 1rem",
                    borderRadius : "4px",
                    outline : "none",
                }}
             />
            </Container>
        </Box>
        <Container>
            <Grid 
                container 
                spacing={4}
                sx={{
                    paddingTop : "2rem"
                }}
            >
                <Grid item lg={3}>
                    <List
                        sx={{
                            border : "1px solid #bdbdbd",
                            borderRadius : "5px",
                            padding : "0"
                        }}
                    >
                        {listItem.map(item =>
                        <ListItem
                            key={ item.title }
                            button
                            sx={{
                                borderBottom : "1px solid #bdbdbd"
                            }}
                        >
                            <ListItemText primary={ item.title } />
                            <Typography
                                sx={{
                                    fontSize : "14px",
                                    color : "#fff",
                                    padding : "2px 8px",
                                    backgroundColor : "#2979ff",
                                    display : "flex",
                                    alignItems : "center",
                                    justifyContent : "center",
                                    borderRadius : "4px"
                                }}
                            >
                                { item.questionNumber }
                            </Typography>
                        </ListItem>
                        )}
                    </List>
                </Grid>
                <Grid item lg={9}>
                    <Box
                        sx={{
                            display : "flex",
                            alignItems : "center",
                            justifyContent : "space-between",
                            marginBottom : "1rem"
                        }}
                    >
                        <Typography

                        >
                            7 questions
                        </Typography>
                        <Button
                            variant="contained"
                            endIcon={ <ArrowForwardIcon /> }
                        >
                            Poser une question
                        </Button>
                    </Box>
                    <Box>
                        {questions.map(question =>
                            <Card 
                                variant="outlined"
                                key={ question.title }
                                sx={{
                                    padding : "2rem 1rem",
                                    marginBottom : "1rem",
                                    display :"flex",
                                    flexDirection : "column",
                                    rowGap : "7px"
                                }}
                            > 
                                <Link href="#">{ question.title }</Link>
                                <Typography>
                                    31/10/2022
                                </Typography>
                                <Typography>
                                    { question.contenu }
                                </Typography>
                                <Typography>
                                    8 réponses
                                </Typography>
                            </Card>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
}

export default Home;
