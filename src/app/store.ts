import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {appReducer} from "../features/reducers/appReducer";
import {authReducer} from "../features/reducers/authReducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store