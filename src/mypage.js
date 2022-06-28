/* Mypage.js */

/* 「useState」と「useEffect」をimport↓ */
import React, { useState, useEffect } from "react";
/* 「onAuthStateChanged」と「auth」をimport↓ */
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig.js";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  /* ↓state変数「user」を定義 */
  const [user, setUser] = useState("");

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const navigate = useNavigate();

  /* ↓関数「logout」を定義 */
  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  }

  return (
    <>
      <h1>マイページ</h1>
      {/* ↓ユーザーのメールアドレスを表示（ログインしている場合） */}
      <p>{user?.email}</p>
      <button onClick={logout}>ログアウト</button>
    </>
  );
};

export default Mypage;
