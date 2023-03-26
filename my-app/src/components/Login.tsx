import React from 'react'
import { useSelector } from 'react-redux';
import { LoginProps } from '../global/global';

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

export default function Login() {
  
    function Login() {
        console.log('떴다요!');
         if(inputData == null) return 
        console.log('로그인성공');
      
       
}
    const inputData = useSelector((state : LoginProps)=> state.inputData)

  return (
        <ul className='wrapper'>
            <h1>Login</h1>
            아이디 : <input type='text' placeholder='이메일' id='id' required />
            <br />
            비밀번호 : <input type='password' placeholder='비밀번호' name='pw' id='pw' required />
            <button onClick={Login} type='button' value='로그인'>로그인</button>
            <label>
                <input name='idsave' id='idSaveCheck' type='checkbox' />아이디저장
            </label>
            <a id='forgot' href='forgot'>비밀번호를 잊으셨나요?</a>
            
        </ul>
    
  )
}
