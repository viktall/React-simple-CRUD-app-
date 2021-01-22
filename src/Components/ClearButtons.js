import React, {useContext} from 'react';
import {Button, ButtonGroup, Container, Typography} from '@material-ui/core';
import {StateContext, ActionsContext} from './stateContext';


const ClearButtons=()=>{
    const {state}= useContext(StateContext)
    const {setState}= useContext(ActionsContext)
    
    return(
        <Container display='flex'>
            <ButtonGroup 
                        variant='outlined'
                        size='large'
                        color='inherit'>
                <Button 
                        onClick={()=>setState([])}        
                >
               <Typography variant="button" noWrap> 
                Clear All
               </Typography> 
            </Button>
            <Button
                onClick={()=>setState(state.filter(val=>val.completed===false))}
             >
               <Typography variant="button" noWrap>   
                Clear Selected
               </Typography>
            </Button>
            </ButtonGroup>
        </Container>
    )
}
export default ClearButtons;