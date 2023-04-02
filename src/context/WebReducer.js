function webReducer(state,action){
    switch(action.type){
        case "ADD":
            return{
                ...state,
                GenderApi:[...state.GenderApi,action.payload,]
            }
        default:
            return [...state]
    }
}

export default webReducer;