import React from "react";
import { useReducer } from "react";
const initialState=[];
const TODOS_ACTIONS={
    ADD_TYPE:"ADD_TYPE",
    DELETE_TYPE:"DELETE_TYPE"
}
function reducer(state,action){
switch(action.type){
    case TODOS_ACTIONS.ADD_TYPE:
        return [...state,{id:state.length+1,name:action.payload}];
    case TODOS_ACTIONS.DELETE_TYPE:
        return state.filter((task)=>(task.id!==action.payload));    
    default:
        return state;    
}
}

export const Todo=()=>{
    function init(){
        const data=[...state,{id:1,name:Reading}];
        return data;
    }
    const[todo,dispatch]=useReducer(reducer,initialState,init);
    const handleChange=(e)=>{
        if(e.key==="Enter"){
            dispatch({type:TODOS_ACTIONS.ADD_TYPE,payload:e.target.value});
        }
    }
    const deleteTask=(id)=>{
dispatch({type:TODOS_ACTIONS.DELETE_TYPE,payload:id});
    }
    return (<>
        <h2>Todo:{todo.length}</h2>
        <label htmlFor="task">Enter the task:</label>
        <input type="text" id="task" onKeyDown={(e)=>handleChange(e)}></input>
        <ul>{todo.map((todos)=>(<li key={todos.id}>{todos.id}.{todos.name}<button onClick={()=>deleteTask(todos.id)}>DELETE</button></li>))}</ul></>)
}
