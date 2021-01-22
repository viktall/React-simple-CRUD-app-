import React, {useContext} from 'react';
import { Tab, Tabs, Badge} from '@material-ui/core';
import {StateContext, ActionsContext} from './stateContext';

export const Select = ['All', 'Completed', 'Uncompleted']

const Footer=()=>{
    const {Inc, filteredArr} = useContext(StateContext)
    const { clickHandler } = useContext(ActionsContext) 
    
    return(
        
        <Tabs
            value={Inc}
            indicatorColor='primary'           
        >
            {Select.map((group, i)=>
                <Tab key={i}
                style={{height:'64px'}}
                     onClick={()=>clickHandler(i)} 
                     label={<Badge badgeContent={i===Inc? (filteredArr.length):null} color='primary' showZero >{group}</Badge>}/>    
                )}
        </Tabs>
        
    )
}

export default Footer;