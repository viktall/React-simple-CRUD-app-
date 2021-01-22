import React from 'react';

import TodoList from './Components/TodoList';
import InputForm from './Components/inputForm';
import ClearButtons from './Components/ClearButtons';
import Footer from './Components/Footer';
import StateComponent from './Components/stateContext';
import './Components/styles.css';
import { Grid, AppBar, Toolbar, Typography, Box } from '@material-ui/core';


const App=()=>{

  return (
    <StateComponent>
    <AppBar style={{backgroundColor:'#00C5CD'}}>
      <Toolbar>
          <Box flexGrow={1}> 
              <Typography variant="h6" noWrap>
                   TODOAPP
              </Typography>
          </Box>
          <Box>
                  <Footer/>
          </Box>
          <Box>
                  <ClearButtons/>
          </Box>
      </Toolbar>
    </AppBar>
    <Toolbar style={{height:'65px'}} />
    <Grid container justify='center' >
        <Grid item xs={11} lg={8} style={{backgroundColor:'#00C5CD'}}>
            
            <InputForm/>
            <TodoList/>
            
        </Grid>
    </Grid>
    </StateComponent>
)}

export default App;