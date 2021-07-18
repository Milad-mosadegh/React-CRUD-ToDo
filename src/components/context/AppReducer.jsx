export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_USER':
            return {
                users: state.users.filter(x => {
                    return x.id !== action.payload
                })
            }
        case "ADD_USER":
            return {
                users: [action.payload, ...state.users]
            }

        default:
            return state;
    }
}