
import {applyMiddleware, combineReducers, createStore} from "redux"
import {reducer as formReducer} from "redux-form"
import thunkMiddleware from "redux-thunk"
import {settingsReducer} from "./settingReducer";

let reducers=combineReducers({
    formBlock:settingsReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store;



