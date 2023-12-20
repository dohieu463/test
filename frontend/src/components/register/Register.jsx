import React from "react";
import "./register.css";
import logo from "./logo.png";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const 登録 = () => {
  const navigate = useNavigate()
  return (
    <div className="section">
      <div className="container1">
        <div className="signup-form">
          <div className="logo-container1">
            <img src={logo} alt="" />
            <h1 className="h1" style={{fontWeight:"bold"}}>Xiuu</h1>
          </div>

          <form onSubmit={()=>navigate("/login")}>
            <input type="text" placeholder=" フルネーム" />
            <input type="text" placeholder=" ユーザーネーム" />
            <input type="password" placeholder=" パスワード" />
            <input type="password" placeholder=" パスワードを認証" />
            <input type="submit" value="登録" />
          </form>
          <a class="question">すでにアカウントをお持ちですか？</a>
          <a onClick={(e)=>navigate("/login")} style={{cursor:"pointer"}}> ログイン</a>
        </div>
      </div>
    </div>
  );
};

export default 登録;
