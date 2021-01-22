import { Container } from '@material-ui/core';
import React, {useContext} from 'react';
import MainContent from './Content';
import {Select} from './Footer';
import {StateContext} from './stateContext';

const TodoList=()=>{
    const {Inc, filteredArr}= useContext(StateContext)
    
    return(
        <>
            {
                filteredArr.length?
                    filteredArr.map((val,i)=>(
                        <MainContent key={i} val={val}/>
                ))
            :
            <Container>
                { 
                    !Inc?
                        <h1>No More Todos...</h1>
                            : 
                         <h1> No {Select[Inc]} todos... </h1>
                }
            </Container>
              }
        </>
    )
}
export default TodoList