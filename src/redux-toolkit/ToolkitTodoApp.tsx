import { Store } from "@reduxjs/toolkit";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, TODO } from "../module/todo";
import store from "./store";
import { addTodo, deleteTodo } from "./todoSlice";
type RootState = ReturnType<typeof store.getState>;

//4.业务通过 useSelector 获取数据；通过 useDispatch 分发
//比如使用 connect，更简单易懂
const ToolkitTodoApp = () => {

    //获取到的是全局的 State，需要通过 reducer 的名称获取到当前需要的状态
    const todos = useSelector((state: RootState) => {
        // console.log('ToolkitTodoApp useSelector>>> ' + JSON.stringify(state) + ", " + typeof state)
        return state.todo.todos;
    });

    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleInput = (e: any) => {
        setText(e.target.value)
    }

    const handleAddTodo = () => {
        //todoSlice 导出的 action, 参数就是 action.payload 的类型
        dispatch(addTodo(text))
        setText('')
    }

    const handleDeleteTodo = (text: string) => {
        dispatch(deleteTodo(text))
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h1>This Is Redux-Toolkit TODO App.</h1>
            <ul>
                {todos && todos.map((todo: TODO, index: any) => {
                    return (
                        <li key={index}>
                            <span>{todo.text}</span>
                            <button style={{marginLeft: '12px'}} onClick={() => handleDeleteTodo(todo.text)}>finish</button>
                        </li>
                    )
                })}
            </ul>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <input value={text} onChange={handleInput}/>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    )
}

export default ToolkitTodoApp;