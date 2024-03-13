export const initialState = {
    loading: true,
    error: null,
    data: null
};

export const reducer = (state, action) => {

    switch (action.type) {

        case 'TOGGLE_THEME':
            return {
                ...state,
                darkMode: !state.darkMode,
            }
        
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default:
            return state;

    }

};