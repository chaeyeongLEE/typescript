import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
//import Auth from '../../hoc/auth';
import { AnyAction } from 'redux';

const Div1 = styled.div`
  margin: auto;
  width: 500px;
  /* padding: 300px; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100% !important;
  }
  h1 {
    font-weight: 700;
    font-size: 40px;
    color: #cecc7f;
    margin-bottom: 30px;
  }
`;
const Input = styled.input`
  width: 350px;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1.5px solid black;
  outline: none;
  @media screen and (max-width: 350px) {
    width: 300px !important;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 70vh;
`;
const Div2 = styled.div`
  text-align: center;
  /* margin-top: -250px; */
  margin-top: 30px;
  width: 100%;
  align-items: center;
  button {
    background-color: #cecc7f;
    color: #f3e9e9;
    border-radius: 4px;
    border-color: #cecc7f;
    box-shadow: 0 2px 8px rgba(140, 218, 161, 0.25);
    display: inline-block;
    margin-right: 10px;
  }
`;
export interface IProps {
    login: ILogin;
}

export  interface ILogin {
    email: string;
    pw: string; 
}


function LoginTwo({login: L}: IProps) {
  const [logins , setLogins] = useState(L);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHandler = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.currentTarget.value);
  };
  let body: {
      email: {
          Email: StringConstructor;
      };
      password: {
          Password: StringConstructor;
      };
  }
  dispatch(loginUser(body))
      //랜딩페이지(초기페이지로 렌딩)
      //로그인 성공시 '/home'로 이동.
      .then((response: { payload: { loginSuccess: any; }; }) => {
        if (response.payload.loginSuccess) {
          navigate('/home');
          alert(`${Email}님의 제로웨이브세상`);
        } else {
          alert('아이디와 비밀번호 정보를 확인해주세요!');
        }
      });
  const onPasswordHandler = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); //이걸 써야 페이지가 초기화되는 것을 막을 수 있다.
    // console.log('Email', Email);
    // console.log('Password', Password);

    

   
  };
//   const navigateToJoin = () => {
//     navigate('/Join');
//   };

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <Div1>
          <h1>LOGIN</h1>
          <label style={{ fontSize: '1.3rem' }}>ID</label>
          <Input type="text" value={Email} onChange={onEmailHandler} />
          <label style={{ fontSize: '1.3rem', marginTop: '20px' }}>
            Password
          </label>
          <Input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />
          <Div2>
            <button type="submit">로그인</button>
            <button onClick={navigateToJoin}>회원가입</button>
          </Div2>
        </Div1>
      </Form>
    </>
  );
//}
export default LoginTwo;

function loginUser(body: { email: string; password: string; }): any {
    throw new Error('Function not implemented.');
}
