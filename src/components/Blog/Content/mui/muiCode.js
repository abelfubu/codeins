const Content = {
  theme: `import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
    
export const lightTheme = createMuiTheme({
     palette: {
       primary: {
         main: '#739574',
      },
     secondary: {
       main: teal[900],
     },
      type: 'light',
  },
  typography: {
      fontFamily: 'MuseoModerno',
      body2: {
       fontSize: '0.6rem',
      },
  },
  shape: {
    borderRadius: '10px',
  },
});
    
export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#739574',
    },
    secondary: {
      main: teal[900],
    },
    type: 'dark',
  },
  typography: {
    fontFamily: 'MuseoModerno',
    body2: {
      fontSize: '0.6rem',
    },
  },
  shape: {
    borderRadius: '10px',
  },
});`,
  provider: `import React, { useContext } from 'react';
import Calculadora from './components/Calculadora';
import NavBar from './components/NavBar';
import {
Typography,
makeStyles,
Grid,
Container,
Box,
} from '@material-ui/core';
import { lightTheme, darkTheme } from './theme';
import { MuiThemeProvider } from '@material-ui/core';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { userContext } from './context/user-context';
            
const useStyles = makeStyles({
helloThere: {
    fontStyle: 'normal',
},
});
            
function App() {
const classes = useStyles();
const user = useContext(userContext).user;
const { type } = user;
return (
       <div className={type === 'light' ? 'bglight' : 'bgdark'}>
     <MuiThemeProvider theme={type === 'light' ? lightTheme : darkTheme}>
           <Grid container direction='column' spacing={1}>
          <NavBar />
          <Grid item></Grid>
          <Grid item>
               <Container maxWidth='md'>
              <Box my={8}>
                <Typography
                gutterBottom
                className={classes.helloThere}
                color='primary'
                   variant='h3'>
                   Numerología
                   </Typography>
                   <RemoveRedEyeIcon
                   color='primary'
                  style={{ fontSize: '8rem' }}
                  />
                  <Typography gutterBottom color='inherit' variant='subtitle1'>
                  Pitágoras afirmó aquello de «Todo es número», donde por número
                  se refería a los números naturales (1, 2, 3…), dando a
                   entender que todo el Universo, desde la música hasta el
                  movimiento de los planetas, se podía explicar con dichos
                  números y las relaciones entre ellos.
                  </Typography>
            </Box>
             </Container>
            
             <Calculadora />
        </Grid>
         </Grid>
    </MuiThemeProvider>
    </div>
);
}
            
export default App;`,
};

export default Content;
