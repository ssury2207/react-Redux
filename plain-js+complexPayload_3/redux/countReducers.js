//action creator 
export function changeCount(amount = 1){
    return { 
        type: "CHANGE_COUNT",
        payload: amount
    }
}
 
function countReducers( state = {count:0}, action ){
    switch(action.type){
        case "CHANGE_COUNT" : return {
            count : 
            state.count + action.payload
        }
        default : return state;
    }
}
export default countReducers;