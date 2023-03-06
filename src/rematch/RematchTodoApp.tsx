import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { TODO } from "../module/todo";
import { Dispatch, RootState } from "./store";

//5.业务通过 useSelector 获取数据；通过 useDispatch 分发
const RematchTodoApp = () => {

    //和 toolkit 类似，需要根据 model 名称访问数据
    //参数类型就是 store 里导出的类型
    const todos = useSelector((state: RootState) => {
        return state.todo.todos;
    });

    //和 toolkit 不同的在于，需要声明类型
    //同时分发的时候也有些不同
    const dispatch = useDispatch<Dispatch>();
    const [text, setText] = useState('');

    const handleInput = (e: any) => {
        setText(e.target.value)
    }

    const handleAddTodo = () => {
        // 分发的时候，通过 dispatch.<model name>.<reducer name> 的方式调用，参数就是 payload 的类型
        //toolkit 里的写法：dispatch(addTodo(text))
        dispatch.todo.addTodo(text)
        setText('')
    }

    const handleDeleteTodo = (text: string) => {
        //toolkit 里的写法：dispatch(deleteTodo(text))
        dispatch.todo.deleteTodo(text)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h1>This Is Rematch TODO App.</h1>
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
                <button style={{marginLeft: '12px'}} onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    )
}

export default RematchTodoApp;