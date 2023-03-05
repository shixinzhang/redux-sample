import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, TODO } from "../module/todo";

const initState : State = {
    todos: [
        {
            text: "zsx clean room"
        }
    ]
};

//1.创建 Slice，每个业务一个 分片
const todoSlice = createSlice({
    name: 'todo',   // 这个名称似乎没啥用
    initialState: initState,
    //最重要的 reducers 属性，包括多个函数
    reducers: {
        addTodo: (state: State, action: PayloadAction<string>) => {
            console.log('reducers addTodo >>> ' + action.payload + ", current: " + JSON.stringify(state))
            //可以直接修改数据
            // state.todos.push({
            //     text: action.payload
            // })
            console.log('reducers after addTodo >>> ' + JSON.stringify(state))
            //也可以返回新的
            return {
                todos: [...state.todos, {text: action.payload}]
            };
        },
        deleteTodo: (state: State, action: PayloadAction<string>) => {
            console.log('reducers deleteTodo >>> ' + action.payload)

            state.todos = state.todos.filter((item: TODO, index: number)=> {
                return item.text != action.payload
            });
        }
    }
})

//2.导出 slice 的 action 和 reducer
export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;