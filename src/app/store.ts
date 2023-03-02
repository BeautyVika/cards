import {combineReducers, legacy_createStore} from "redux";
import {appReducer} from "../features/reducers/appReducer";
import {authReducer} from "../features/reducers/authReducer";


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)


// @ts-ignore
window.store = store