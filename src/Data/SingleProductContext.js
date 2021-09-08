import React,{createContext,useReducer} from 'react'

export const SingleContext = createContext();

//reducer function
const singleReducer=(state,action)=>{
    if(action.type === "SHOW_DETAIL"){
        return state ={...action.payload}
    }
}

function SingleProductContext(props) {
    const [p,dispatch]= useReducer(singleReducer,{});

    return (
        <div>
            <SingleContext.Provider value={{...p,dispatch}}>
                {props.children}
            </SingleContext.Provider>
        </div>
    )
}

export default SingleProductContext
