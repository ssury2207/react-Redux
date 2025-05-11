//action creator 
function changeCount(amount = 1){
    return { 
        type: "CHANGE_COUNT",
        payload: amount
    }
}
function addString(String){
    return {
        type: "ADD_STRING",
        payload : String
    }
}
//reducer
const initialState = {
   count:10,
   stringArray:[],
}

function reducer (state=initialState,  action){
    switch(action.type){
        case "CHANGE_COUNT" : 
            return  { 
                ...state,
                count: state.count + action.payload 
            }
        case "ADD_STRING" : 
            return  { 
                ...state ,
                stringArray: [...state.stringArray, action.payload]
            }
        default : return state   
    }
}

const store = Redux.createStore(reducer);

store.subscribe(()=>
    console.log(store.getState())
)

store.dispatch(changeCount(10));
store.dispatch(changeCount(10));
store.dispatch(addString(10));
store.dispatch(addString(200));



