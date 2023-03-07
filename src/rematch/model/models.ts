import { Models } from "@rematch/core";
import {todo} from "./todo";

//1.导出当前业务的所有 model 的类型
export interface RootModel extends Models<RootModel> {
    //这里的名称就是后续调用 dispatch 的名称
    todo: typeof todo
}

//创建并导出所有 model 的实例
export const models: RootModel = {todo: todo}