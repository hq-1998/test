import React from "react";
import { getCarList } from "../api";

export default function Contact() {
  const getList = () => {
    getCarList({ page: "1" }).then((res) => console.log(res));
  };

  return (
    <>
      <div>Contact页面</div>
      <button onClick={getList}>获取数据</button>
    </>
  );
}
