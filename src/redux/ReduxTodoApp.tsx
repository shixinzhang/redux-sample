import {useState} from "react";
import { connect } from "react-redux";
import { State, TODO } from "../module/todo";
import {DISPATCH_ADD_TODO, DISPATCH_DELETE_TODO } from "./todoActions";

//6.数据和 action 函数需要通过 prop 访问
function ReduxTodoApp (prop: {todos: TODO[], addTodo: any, deleteTodo: any}) {

    const {todos, addTodo, deleteTodo} = prop;
    const [text, setText] = useState('');

    const handleInput = (e: any) => {
        setText(e.target.value)
    }

    const handleAddTodo = () => {
        addTodo(text)
        setText('')
    }

    const handleDeleteTodo = (text: string) => {
        deleteTodo(text)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h1>This Is Redux TODO App.</h1>
            <ul>
                {todos.map((todo: TODO, index: any) => {
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

//外部的数据（即state对象）如何转换为 UI 组件的参数
//mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
const mapStateToProps = (state: State) => {
    console.log('mapStateToProps >>> ' + JSON.stringify(state))
    //返回的是一个对象，需要根据属性名访问
    return {
        todos: state.todos
    }   
}

//建立 UI 组件的参数到store.dispatch方法的映射
//定义了哪些用户的操作应该当作 Action，传给 Store
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    //返回一个 Prop 对象
    return {
        addTodo: DISPATCH_ADD_TODO(dispatch),
        deleteTodo: DISPATCH_DELETE_TODO(dispatch)
    }
};

//5.组件接收数据和分发行为
export default connect(mapStateToProps, mapDispatchToProps) (ReduxTodoApp);