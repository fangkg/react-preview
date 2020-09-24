import { createStore } from "redux";

// 定义state初始化和修改规则
function countReducer(state = 0, action) {
    switch(action.type) {
        case "ADD":
            return state + 1;
        case "MINUS":
            return state - 1;
        default:
            return state;
    }
}

// 创建store 参数为修改规则
const store = createStore(countReducer)

// 导出
export default store;