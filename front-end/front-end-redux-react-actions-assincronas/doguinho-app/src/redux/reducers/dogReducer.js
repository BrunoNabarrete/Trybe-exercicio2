import { REQUEST_STARTED, REQUEST_SUCESSFUL, REQUEST_FAILED } from '../actions';

const initialState = {
    isFetching: false,
    imageURL: '',
    errorMessage: '',
};

function dogReducer(state = initialState, action) {
    switch(action.type){
        case REQUEST_STARTED:
            return {
                ...state,
                isFetching: true,
                errorMessage: '',
                imageURL: '',
            };

            case REQUEST_SUCESSFUL:
                return {
                    ...state,
                    isFetching: false,
                    imageURL: action.payload,
                    errorMessage: ''
                };

                case REQUEST_FAILED:
                    return {
                        ...state,
                        isFetching: false,
                        errorMessage: action.payload,
                        imageURL: '',
                    };

                default:
                    return state;
    }
}

export default dogReducer;