//action creator 
export function addString(String){
    return {
        type: "ADD_STRING",
        payload : String
    }
}
const stringArray = []
function stringArrayReducers( state = {stringArray} , action ){
    switch(action.type){
        case "ADD_STRING" : 
        return  { 
            stringArray :  [...state.stringArray, action.payload]
        }
        default : return state
    }
}
export default stringArrayReducers;