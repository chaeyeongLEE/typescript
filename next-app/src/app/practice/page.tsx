import React from "react";
import styles from "./practice.module.scss";

type User = {
  name: string;
  age: number;
};

const Practice = () => {
  const user: User = { name: "LEE", age: 20 };
  return (
    <div className={styles.container}>
      <h3>이름 : {user.name}</h3>
      <h3>나이 : {user.age + 2}</h3>
    </div>
  );
};

export default Practice;
