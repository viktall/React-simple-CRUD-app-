import React, {useState, useContext} from 'react';
import {Save} from '@material-ui/icons'
import {TextField, Button, Container} from '@material-ui/core';
import {ActionsContext} from './stateContext';

const EditForm=({id, todo, setEdit})=>{
    const[editedVal, setEditedVal]= useState(todo)
    const {todoEdit} = useContext(ActionsContext)
    
    return(
        <form onSubmit={e=>{e.preventDefault()
                            if(editedVal.trim()){
                            todoEdit(id, editedVal)
                            setEditedVal('')} 
                            setEdit(false)}}>

        <Container style={{display:'flex'}}>                  
        <TextField 
                 label='Edit Todo'
                 autoFocus
                 fullWidth
                 value={editedVal}
                 onChange={e=>setEditedVal(e.target.value)}
                 
        />
        <Button 
                edge='end'
                color='primary'
                type='submit'
                endIcon={<Save />}
        >
            Save 
        </Button>
        </Container>
    </form>    
    )
}

export default EditForm;