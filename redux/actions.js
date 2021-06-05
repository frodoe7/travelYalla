module.exports = {
    ADD_MOVIE : 'ADD_MOVIE',
    EDIT_MOVIE : "EDIT_MOVIE",
    DELETE_MOVIE : 'DELETE_MOVIE',
    ADD_CATEGORY : 'ADD_CATEGORY',
    createAction : (actionType , payload) => {
        return {
            type : actionType,
            payload
        }
    }
}