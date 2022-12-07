export const REQUEST_STARTED = 'REQUEST_STATED';
export const REQUEST_SUCESSFUL = 'REQUEST_SUCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStated() {
    return { type: REQUEST_STARTED };
}

function requestSuccessful(imageURL) {
    return {
        type: REQUEST_SUCESSFUL,
        payload: imageURL,
    };
}

function requestFailed(error) {
    return {
        type: REQUEST_FAILED,
        payload: error,
    }
}

export function fetchDogImage() {
    return (dispatch) => {
        dispatch(requestStated());
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => dispatch(requestSuccessful(data.message)))
        .catch((error) => dispatch(requestFailed(error)));
    }
}