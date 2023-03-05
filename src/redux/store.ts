import { createStore } from 'redux';
import todoReducer from './reducers';

//4.创建 store，提供全局的状态和行为处理
const store = createStore(
    todoReducer
);

//监听数据变化
store.subscribe( () => {
    console.log("store changed >>>" + JSON.stringify(store.getState()))
})

export default store;