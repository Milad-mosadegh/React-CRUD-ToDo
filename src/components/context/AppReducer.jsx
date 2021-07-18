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

        case "EDIT_USER":
            const updateUser = action.payload
            const updateUsers = state.users.map(x => {
                if (x.id === updateUser.id) {
                    return updateUser
                }
                return x
            })
            return {
                users: updateUsers
            }

        default:
            return state;
    }
}