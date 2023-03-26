import { AnyAction } from "redux";

const initialState = [
        {
            email:'',
            id:'',
            pw:'',
        }
    ];


    const joinReducer = (state= initialState, action:AnyAction) => {
        if(action.type === "ISSIGNUP") {
            alert("회원가입 성공!")
        } else if(action.type === "ISNOTSIGNUP"){
            alert("값을 입력해주세요")
        }
        return state;
    }

    export default joinReducer;