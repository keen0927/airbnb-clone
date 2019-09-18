export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    reasonErrorLogin: null,
    nickName: 'keen'
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
                reasonErrorLogin: action.error
            }
        default: {
            return {
                ...state
            }
        }
    }
}