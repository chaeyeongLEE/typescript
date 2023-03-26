import { AnyAction } from "redux";

const initialState = [
    {
        email:'',
        id:'',
        pw:'',
    }
];

const loginReducer = (state= initialState, action:AnyAction) => {
    if(action.type === "ISLOGIN") {
        alert("로그인 성공!")
    } else if(action.type === "ISNOTLOGIN"){
        alert("값을 입력해주세요")
    }
    return state;
}

export default loginReducer;