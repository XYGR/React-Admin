
// initialState
const initialState = {
    isMobile:false
}

// Types
const SET_IS_MOBILE = 'system/set_is_mobile';

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_MOBILE:
            return {
                ...state,
                isMobile : action.value,
            }
        default:
            return state
    }

}


// 同步action
export const setIsMobile = (value) =>({
    type :SET_IS_MOBILE,
    value
})

// 异步action