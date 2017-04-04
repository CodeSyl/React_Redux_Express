import axios from 'axios';

export function fectchUser() {
    return {
        type: 'FETCH_USER_FULFILLED',
        payload: {
            name: 'Constance',
            nickname: 'Ponyo'
        }
    }
}

export function fetchMongoDb(data) {
    return (dispatch) => {
        console.log('userAction => fetchMongoDb > before Call Api', data);

        axios.post('http://127.0.0.1:6464/api/home/connect-to-mongoDb', data)
            .then((response) => {

                console.log('userAction => fetchMongoDb > response', response.config.data);
                console.log('userAction => fetchMongoDb > response', JSON.parse(response.config.data));
                dispatch({ type: 'FETCH_MONGODB_FULFILLED', playload: response.config.data });

            }).catch(function (err) {

                console.log('userAction => fetchMongoDb > error', err);
                dispatch({ type: 'FETCH_MONGODB_REJECTED', playload: err });

            })
    }
}
