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
function removeString(String){
    return {
        type: "REMOVE_STRING",
        payload : String
    }
}
function addTitle(String){
    return {
        type: "ADD_TITLE",
        payload : String
    }
}
function addViewCount(String){
    return {
        type: "VIEW_COUNT",
        payload : String
    }
}
function upVote(){
    return {
        type: "ADD_VOTE",
    }
}
//reducer
const initialState = {
   count:10,
   stringArray:[],
   youtubeVideo: {
    title:"",
    viewCount: 0,
    vote:{
        up :0,
        down:0
    }
   }
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
        case "REMOVE_STRING" : 
            const updateArray = state.stringArray.filter((string) => string.toLowerCase() !== action.payload.toLowerCase() )
            return  { 
                ...state ,
               stringArray: updateArray
            }
        case "ADD_TITLE" : 
            return  { 
                ...state ,
                youtubeVideo :{
                    ...state.youtubeVideo,
                    title : action.payload
                }
            }
        case "VIEW_COUNT" : {
            return {
                ...state,
                youtubeVideo:{
                    ...state.youtubeVideo,
                    viewCount: action.payload,
                }
            }
        }
        case "ADD_VOTE" : {
            return {
                ...state,
                youtubeVideo:{
                    ...state.youtubeVideo,
                    vote: {
                        ...state.youtubeVideo.vote,
                        up: state.youtubeVideo.vote.up + 1
                    }
                }
            }
        }
        default : return state   
    }
}

const store = Redux.createStore(reducer);

store.subscribe(()=>
    console.log(store.getState())
)

store.dispatch(addTitle("Adding new video title"));
store.dispatch(addTitle("Hi guyz welcome to my vlog"));
store.dispatch(addViewCount(10));
store.dispatch(addTitle("Hi guyz welcome to my another vlog"));
store.dispatch(upVote());
store.dispatch(upVote());





 





