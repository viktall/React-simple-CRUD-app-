import React, {createContext, useState, useEffect} from 'react';
export const StateContext = createContext();
export const ActionsContext = createContext();

const StateComponent=({children})=>{

    // ************************ State declarations with hooks **********************
const [filteredArr, setFilteredArr]=useState([])
const [Inc, setInc] = useState(0)
const clickHandler=(i)=> setInc(i)
const [state , setState] = useState([
                    {id:1, todo:'Go to the gym', completed:false},
                    {id:2, todo:'Go for a meeting', completed:false},
                    {id:3, todo:'Hang out with loved ones', completed:false},
                    {id:4, todo:'Go visiting', completed:false},
                    {id:5, todo:'Read a book', completed:false}
            ])    
            const UpdateState=(newTodo)=>{
        
                setState([...state, 
                            { id:Math.random()*100000, 
                              todo:newTodo, 
                              completed:false}
                            ])
        }     
            const  todoEdit=(todoId, newVal)=>{
                setState(state.map(todo=>
                    todo.id===todoId? {...todo, todo:newVal}:todo))
            }  
            
            const HandleCheck=(e)=>{
                setState(state.map(st=>
                    st.id===e.id?{
                        ...st,
                        completed:!st.completed
                    }:st
                )
            )}
            
            const HandleDel=(e)=>{
                setState(state.filter(st=>st.id!==e.id))
            }

            useEffect(()=>{  
                const HandleSwitch=()=>{ 
                    switch(Inc){
                        case 0:
                            setFilteredArr(state)
                            break;
                        case 1:
                            setFilteredArr(state.filter(val=>val.completed===true))
                            break;
                        default:
                            setFilteredArr(state.filter(val=>val.completed===false))
                            break;
                                }
                }    
                   HandleSwitch()
                },[state, Inc])
                
    const value={filteredArr, Inc, state}
    const valueActions={setState, UpdateState, clickHandler, todoEdit, HandleCheck, HandleDel}
    
    return  (    
        <StateContext.Provider value={value}>
            <ActionsContext.Provider value={valueActions}>
                        {children}
            </ActionsContext.Provider>                
        </StateContext.Provider>
        
         )

}
export default StateComponent;