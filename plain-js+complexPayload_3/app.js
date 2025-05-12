import { changeCount } from "./redux/countReducers.js";
import store from "./redux/index.js";
store.dispatch(changeCount(100));
store.dispatch(changeCount(-80));
store.dispatch(changeCount(-10));

