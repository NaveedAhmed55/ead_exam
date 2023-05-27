import { createContext,useReducer } from "react";
const AppReducer=(state,action)=>{
     switch(action.type)
     {  case "1":
           return {
            ...state,
            javascript:state.javascript+1
           }
        case "2":
            return{
                ...state,
                python:state.python+1
            }
        case "3":
            return{
                ...state,
                java: state.java+1
            }
        case "4":
            return{
                ...state,
                c:state.c+1
            }
        default:
            return state;
     }
}

const initialState={
    question:"What is your favorite programming language?",
    javascript:0,
    python:0,
    java:0,
    c:0,
};
export const AppContext=createContext();

export const AppProvider=(props)=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)
    return(
        <AppContext.Provider value={{
        question:state.question,
        javascript:state.javascript,
        python:state.python,
        java:state.java,
        c:state.c,
        dispatch,
        }}>
        {props.children}
        </AppContext.Provider>
    )
};