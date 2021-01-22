import React, {useContext, useState } from 'react';
import {TextField, Button, Container} from '@material-ui/core';
import {ActionsContext} from './stateContext';

const InputForm=()=>{
const {UpdateState}=useContext(ActionsContext)
const [inputTextValue, setInputTextValue]=useState('');

    return(
      
            <form onSubmit={e=>{e.preventDefault()
                                if(inputTextValue.trim()){
                                UpdateState(inputTextValue)
                                setInputTextValue('')}
                                }}>
            <Container style={{display:'flex', marginTop:30, marginBottom:34}}>
                  <TextField 
                             label='Add Todo'
                             onChange={e=>setInputTextValue(e.target.value)}
                             value={inputTextValue}
                             fullWidth
                             />
                  <Button
                        type='submit'
                        variant='contained' 
                        color='secondary'
                        size='medium'                 
                  >
                      Submit
                  </Button>
                  </Container> 
            </form>
            
      )
}
export default InputForm;