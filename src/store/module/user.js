

// initialState
const initialState = {
    user : null,
}

// Types
const SET_USER = 'user/set_user';

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user : action.value,
            }
        default:
            return state
    }

}


// 同步action
const setUserAction = (value) =>({
    type :SET_USER,
    value
})

// 异步action
export const setUser = (user) => (dispatch) =>{
    dispatch(setUserAction(user))
}

// 登录
export const userLogin = (userName,password) => (dispatch) =>{
    if (userName === 'admin' && password === 'admin'){
        let user = {
            userName:'管理员',
            permissions:true,
            uid:15616
        }
        dispatch(setUserAction(user))
    }
}