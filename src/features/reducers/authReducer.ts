const initialState = {
    isLoggedIn: false
}
type AuthStateType = typeof initialState

export const authReducer = (state: AuthStateType = initialState, action: any): AuthStateType => {
    switch (action.type) {

        default:
            return state
    }
}


