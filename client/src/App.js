import React,{useState,useEffect} from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux'
 
import {getPosts} from './actions/posts';
import echoes from './images/echoes.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form' 
import useStyles from './styles'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Bebas Neue', 'cursive'
    ].join(','),
  },});

const App = () => {
    const[currentId,setCurrentId]=useState(null);
    const classes=useStyles();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch])
    return (
        <ThemeProvider theme={theme}>

        <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit" style={{ background: '#0D0D0D' }}>
            <Typography className={classes.heading} variant="h3" align="center">echoes</Typography>
        <img className={classes.image} src={echoes} alt="echoes" height="60"/>
        </AppBar>
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
        </Container>
        </ThemeProvider>
    )
}

export default App
