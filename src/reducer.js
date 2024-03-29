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
    }

};