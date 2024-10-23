export const reducerSwitch = (state, action) => {
    switch(action.type){
        case "increment":
            return{
                ...state,
                count: state.count + 1
            }

        case "decrement":
            return{
                ...state,
                count: state.count - 1
            }
        case "additem":
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "incamt":
            return{
                ...state,
                count: state.count + action.payload
            }
        case "additem":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        default:
            return state
    }
}