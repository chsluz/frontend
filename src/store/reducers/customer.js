

const initialState = {
    list: [],
    showErrors: false,
    showSuccess: false,
    errorMessage: '',
}


export default function(state = initialState, action){
    switch(action.type) {
        case 'LIST_CUSTOMERS': {
            return {...state, list: action.payload, showErrors: false,showSuccess: false, errorMessage: ''}
        }
        case 'SET_SHOW_SUCCESS': {
            return {...state, showErrors: false,showSuccess: false, errorMessage: ''}

        }
        case 'ERROR_CUSTOMERS': {
            return {...state, list: [], showErrors: true,showSuccess: false, errorMessage: action.payload}
        }
        case 'UPDATE_CUSTOMER': {
            return {...state, showErrors: false,showSuccess: true, errorMessage: ''}
        }
        case 'DELETE_CUSTOMER': {
            let newList = [...state.list];
            let filteredList = newList.filter(item => item.id !== action.payload);
            return {...state,list: filteredList, showErrors: false,showSuccess: true, errorMessage: ''}
        }
        case 'ADD_CUSTOMER': {
            return {...state, showErrors: false,showSuccess: true, errorMessage: ''}
        }
        default: {
            return state;
        }
    }
}