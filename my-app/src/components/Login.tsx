import React from 'react'
import styled from 'styled-components'
import { LoginProps } from '../global/global';

export default function Login() {



    const login = () => {};
    const Div1 = styled.div`
        
    `
    const Div2 = styled.div`
        
    `
    const Button = styled.button`
        
    `
  return (
        <Div1>
            <h1>Login</h1>
            <Div2>
            아이디 : <input type='text' placeholder='아이디' name='user_Id' id='userId' required />
            <br />
            비밀번호 : <input type='password' placeholder='비밀번호' name='user_pw' required />
            <Button onClick={login} type='button' value='로그인'>로그인</Button>
            <label>
                <input name='idsave' id='idSaveCheck' type='checkbox' />아이디저장
            </label>
            <a id='forgot' href='forgot'>비밀번호를 잊으셨나요?</a>
            </Div2>
        </Div1>
    
  )
}
