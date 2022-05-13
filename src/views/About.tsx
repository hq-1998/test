import React from "react";
import { connect } from "react-redux";
import { setName, setAge } from "../store/action";

interface Props {
  setAge: (age: number) => void;
  setName: (name: string) => void;
  age: number;
  name: string;
}

function About(props: Props) {
  return (
    <>
      <div>About页面</div>
      <p>{props.name}</p>
      <button onClick={() => props.setName("李四")}>修改姓名</button>
      <p>{props.age}</p>
      <button onClick={() => props.setAge(20)}>修改年龄</button>
    </>
  );
}

export default connect((props, state) => Object.assign({}, props, state), {
  setAge,
  setName,
})(About);
