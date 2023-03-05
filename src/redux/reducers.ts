import { State, TODO } from "./model";
import { ADD_TODO, DELETE_TODO } from "./todoActions";

const initState : State = {
    todos: [
        {
            text: "zsx clean room"
        }
    ]
};

//3.创建行为处理函数
const todoReducer = (state: State = initState, action: any): State => {
    switch(action.type) {
        case ADD_TODO:
            //返回一个新的状态树
            return {
                todos: [...state.todos, {text: action.payload}]
            };
        case DELETE_TODO:
            console.log('todoReducer delete >>>' + action.payload)
            const todos = state.todos.filter((item: TODO, index: number)=> {
                return item.text != action.payload
            });
            return {
                todos
            }
        default:
            console.log('return default>>>' + JSON.stringify(state))
            return state;
    }
};

export default todoReducer;