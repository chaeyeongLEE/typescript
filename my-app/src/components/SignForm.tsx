import React from 'react';
import { useForm } from 'react-hook-form';

interface FormValue{
    email: string;
    password : string;
    passwordConfirm: string;
}

const LoginForm = (props:any) => {
  const {
    register,
    handleSubmit,
    formState:{errors},
    getValues,
  } = useForm<FormValue>({mode:"onChange"})
;

return (
  // handleSubmit안에 실제로 동작할 함수를 넣음
  <form onSubmit={handleSubmit(props.onSubmit)}>
    <div>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="text"
        placeholder="test@email.com"
        // input의 기본 config를 작성
        // input을 useForm과 연결하기 위해서 register를 사용
        {...register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value:
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
      />
      {errors.email && <small role="alert">{errors.email.message}</small>}
    </div>
 
    <div className="form-control__items">
    <label htmlFor="password">비밀번호</label>
    <input
      id="password"
      type="password"
      placeholder="*******"
      {...register("password", {
        required: "비밀번호는 필수 입력입니다.",
        minLength: {
          value: 7,
          message: "7자리 이상 비밀번호를 입력하세요.",
        },
      })}
    />
    {errors.password && (
      <small role="alert">{errors.password.message}</small>
    )}
  </div>
    <div>
    <label htmlFor="password">비밀번호 확인</label>
    <input
        id="password"
        type="password"
        placeholder="*******"
        {...register("passwordConfirm", {
        required: "비밀번호는 필수 입력입니다.",
        minLength: {
            value: 7,
            message: "7자리 이상 비밀번호를 사용하세요.",
        },
        validate: {
            check: async (email) => {
                return props.checkExistingUser(email);
            },
        }
        })}
    />
    {errors.passwordConfirm && (
        <small role="alert">{errors.passwordConfirm.message}</small>
    )}
</div>
  </form>
)
      };
export default LoginForm;