export default function reducer(state = {
    user: {
        id: null,
        name: null
    },
    fetching: false
}, action) {

    switch (action.type) {
        case 'FETCH_USER_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        default:
            break;
    }
    return state;
}