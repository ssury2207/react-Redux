
function changeCount(amount = 1){
    return {type : "CHANGE_COUNT", payload : amount}
}
 
function double(){
    return {type : "DOUBLE"}
}function halve(){
    return {type : "HALVE"}
}
function reducers(state = {count : 0}, action){
    switch(action.type){
        case "CHANGE_COUNT" :
            return{ count : state.count + action.payload}
        case "DOUBLE" :
            return {count : state.count * 2 }
        case "HALVE" :
            return {count : Math.round(state.count/2)}
        default : return state
    }
}

const store = Redux.createStore(reducers);
//its a callback fuction that check if there has been a change in state; whenever it does its prints the current state
store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(changeCount());
store.dispatch(changeCount(10));
store.dispatch(changeCount(-100));


