import redux, {applyMiddleware, createStore} from "redux"
import { thunk } from "redux-thunk"

export function increment(){
    return (dispatch) => setTimeout(() => {
        dispatch({type:"INCREMENT"})
    }, 1000);
}
export function decrement(){
    return{
        type: "DECREMENT",
    }
}
//create reducers
function reducers( state ={count:10}, action ){
    switch(action.type){
        case "INCREMENT" : 
            return {
                count: state.count+ 10 
            }
        case "DECREMENT" : 
            return {
                count: state.count - 10 
            }
        default : return state;
    }
}

const store = createStore(reducers, applyMiddleware(thunk));

export default store;