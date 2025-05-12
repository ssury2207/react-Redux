import countReducers from "./countReducers.js"
import stringArrayReducers from "./stringArrayReducers.js"

const reducer =  Redux.combineReducers({
    count: countReducers,
    stringArray: stringArrayReducers
})
 

const store = Redux.createStore(reducer)

store.subscribe(()=>
    console.log(store.getState())
)
export default store;
