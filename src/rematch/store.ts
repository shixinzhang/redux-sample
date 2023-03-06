import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./model/models";

//3.创建 store，参数就是所有业务的 model
export const store = init({
    name: 'xxx',   //支持多个 store，可以设置名称，没什么用？
    models
})

store.subscribe( () => {
    console.log('store update >>> ' + JSON.stringify(store.getState()))
})

store.dispatch.todo.addTodo("add from store")

//4.返回类型，用于业务组件里使用
export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>