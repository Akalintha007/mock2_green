import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";
import ButtonComponent from "./components/atoms/Button";
import mainTheme from "./Themes/main";
import logo from './login.svg'
import {makeStyles} from '@mui/styles'

const useStyle = makeStyles({
      statusBox: {
        margin: `0 ${mainTheme.spacing(4)} 0 0`        
    },
    status: {
        margin: `0 ${mainTheme.spacing(4)} 0 0`,

    }

})

const LoginButton = () => {

  const classes= useStyle();

  const { loginWithRedirect } = useAuth0();
  const changeBackground=(changeColor:any) =>{
    changeColor.target.style.background = '#00C263';
  }
  const changeBackground1=(changeColor:any) =>{
    changeColor.target.style.background = '#2CE080'; 
  }

  return <Box
    sx={{
      width:'96vw',
      height:'50vh',
      display:'flex',
      flexDirection:'column',
      padding:'20px',
      alignItems: "center", 
      justifyContent: "center"
      
    }}
  >
    
    <img src={logo} alt='login page' height='250px' />
    
    <ButtonComponent onClick={() => loginWithRedirect()} children= 'Login' size='large' style={{alignItems:'center',marginTop:'40px', width:'160px',boxShadow:'none',fontSize:'20px'}} variant='contained' color='success' onMouseOver={changeBackground} onMouseOut={changeBackground1} classesName={classes.status}/>
    
                          
  </Box>;
};

export default LoginButton;
