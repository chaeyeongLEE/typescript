"use client"

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  id: string;
  password: string;
}

export default function Page(){
  const {register, handleSubmit, formState: { errors }} = useForm<Inputs>();
  // useForm<Inputs>();을 사용하여 register, handleSubmit, formState의 타입을 자동으로 설정해 줌.

  const onSubmit:SubmitHandler<Inputs> = (data) => {
    console.log(data);}
  return (
    <form onSubmit= {handleSubmit(onSubmit)}>
      <input defaultValue="아이디" {...register("id", {minLength:5})} />
      {errors.id && <span>5글자 이상 작성하여주세요.</span>}
      <input {...register("password", {required: true})} />
      {errors.password && <span>비밀번호를 입력해주세요.</span>}
      <input type="submit" />
    </form>
  );
};
