import React,{useState} from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import Icon from './icon'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const Auth = () => {
    const classes=useStyles();
    const[showPassword,setShowPassword]=useState(false);
    const[isSignup,setIsSignup]=useState(false);
    const disptach=useDispatch();
    const history=useHistory();
    
    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword);
    const handleSubmit =()=>{

    }
    const handleChange=()=>{
        
    }
    const switchMode=()=>{
        setIsSignup((prevIsSignup)=>!prevIsSignup);
        handleShowPassword(false);
    }
    const googleSuccess=async (res)=>{
    
        const result=res?.profileObj;
        const token=res?.tokenId;
        try {
            disptach({type:'AUTH',data:{result,token}});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure=()=>{
    console.log('failed');
    }
    return (
        <Container component="main" maxWidth ="xs">
            <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>  
            </Avatar>
            <Typography variant="h5" >{isSignup?'Sign Up':'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                           
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                            <Input name="firstName" label="First Name" handleChange={handleChange} half/>
                            
                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
                    { isSignup && <Input name="confirmPassword" label="Repeat Paaword" handleChange={handleChange} type="password"/>}
                </Grid>
                
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignup?'Sign Up':'Sign In'}
                </Button>
                <GoogleLogin
                    clientId="65789993572-b4o78uhefthes5n7p465aj7nb0jtv6cp.apps.googleusercontent.com"
                     render={(renderProps)=>
                     (<Button className={classes.googlebutton}
                      color='primary'
                       fullWidth
                        onClick={renderProps.onClick}
                         disabled={renderProps.disabled}
                          startIcon={<Icon/>}
                           variant="contained"
                           >
                            Google Sign In
                           </Button>)}
                               onSuccess={googleSuccess}
                               onFailure={googleFailure}
                               cookiePolicy="single_host_origin"
                           />
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup ?'Already have an account?Sign In':'Dont have an account?Sign Up'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </Container>
    )
}

export default Auth
