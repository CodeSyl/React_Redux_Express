export function fectchUser() {
    return {
        type: 'FETCH_USER_FULFILLED',
        payload: {
            name: 'React',
            nickname: 'Redux'
        }
    }
}