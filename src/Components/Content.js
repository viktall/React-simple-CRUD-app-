import React, {useContext, useState} from 'react';
import {
         Avatar, 
         List, 
         ListItem, 
         ListItemAvatar, 
         ListItemText, 
         IconButton, 
         ListItemSecondaryAction, 
         Checkbox, 
         Container,
         Chip,
         Divider } from '@material-ui/core';
import {Event, Cancel, Edit} from '@material-ui/icons' ;
import EditForm from './editForm'
import {ActionsContext} from './stateContext';


const MainContent=({val})=>{

const {HandleCheck, HandleDel} = useContext(ActionsContext)
const [isEdit, setEdit]=useState(false);    

const Toggle=()=>{
    setEdit(!isEdit)
}
 return(
    <Container >
            <List>
            <ListItem style={{backgroundColor:val.completed? '#00C5CD':''}}>
            <Container style={{display:'flex'}}>

                 <ListItemAvatar>
                    <Avatar >
                        <Event color='primary'/>
                    </Avatar>    
                </ListItemAvatar>

                {isEdit?
                    <Container>
                            <EditForm id={val.id} todo={val.todo} setEdit={setEdit} />
                    </Container>
                    :
                    <Container style={{display:'flex', alignItems:'center'}}>
                            <Checkbox onClick={()=>HandleCheck(val)} checked={val.completed}/>
                            <ListItemText primary={ val.todo}/>

                                <ListItemSecondaryAction>
                                    <IconButton edge='end' color='secondary' onClick={()=>HandleDel(val)}>
                                            <Cancel/>
                                    </IconButton>
                                    <>{!val.completed?
                                    <IconButton edge='end' color='primary' onClick={()=>Toggle()}>
                                            <Edit/>
                                    </IconButton>
                                    :
                                    
                                    <Chip label='Completed' size='small'/>
                                    
                                    }</>
                                </ListItemSecondaryAction> 
                    </Container>}
            </Container>
            </ListItem>
        </List>
        
        <Divider/>
        </Container>
        )
}

export default MainContent;