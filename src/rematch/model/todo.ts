import { createModel } from "@rematch/core";
import { State, TODO } from "../../module/todo";
import { RootModel } from "./models";

const initState : State = {
    todos: [
        {
            text: "zsx clean room, model init data"
        }
    ]
};

//1.创建一个 model（类似 redux-toolkit 的 slice），包括一个业务的初始状态、状态处理和变更后的影响
//最核心的地方 **
export const todo = createModel<RootModel> () ({
    name: 'todo',
    state: initState,
    //reducers 需要是纯函数：只依赖参数进行计算，不使用外部数据
    reducers: {
        //与 toolkit 的 slice 不同，参数直接是 payload，更简单
        // addTodo: (state: State, action: PayloadAction<string>) => {
        addTodo: (state: State, payload: string) => {
            console.log('createModel addTodo >>> ' + payload + ", current: " + JSON.stringify(state))
            // //可以直接修改数据，也可以返回新的，不论哪种方式，都必须有返回值！必须有返回值！必须有返回值！

            //1.直接修改数据
            // state.todos.push({
            //     text: payload
            // })
            // console.log('createModel after addTodo >>> ' + JSON.stringify(state))
            // return state
        
            //返回新状态
            return {
                ...state,
                todos: [...state.todos, {text: payload}]
            };
        },
        deleteTodo: (state: State, payload: string) => {
            console.log('createModel deleteTodo >>> ' + payload)

            // state.todos = state.todos.filter((item: TODO, index: number)=> {
            //     return item.text !== payload
            // });

            // //修改原有数据后，返回原来的数据，看起来不会触发立刻更新？
            // return state

            const todos = state.todos.filter((item: TODO, index: number)=> {
                return item.text !== payload
            });
            
            return {
                ...state,
                todos
            }
        }
    },
    //当需要使用外部数据时（比如调用接口），通过 effects
    //一般用作异步的 action
    effects: (dispatch) => ({
        async loadData(payload, rootState) {
            console.log('effects loadData >>>')
            //请求数据
            const response = await fetch(`http://example.com/${payload}`);
            const data = await response.json();
            //dispatch 给其他地方，有两种方式：1.通过 this 直接调用这个 model 里的 reducer 2.通过 dispatch
            // this.addTodo(data)
            // dispatch.todo.addTodo()
        }
    }),
})