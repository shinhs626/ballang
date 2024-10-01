"use client";
import supabase from "@/supabase/client";
import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");

  async function handleClickSignUp() {
    if (!email) return alert("이메일 주소를 작성해 주세요");
    if (!email.includes("@") && !email.includes("."))
      return alert("올바른 형식에 이메일 주소를 작성해 주세요");
    if (!password || password.length < 8)
      return alert(
        "비밀번호를 입력해 주시거나 비밀번호를 8글자 이상으로 입력해 주세요"
      );
    if (checkPass !== password)
      return alert("비밀번호 확인을 비밀번호와 같게 입력해 주세요");
    const result = await supabase.auth.signUp({email, password})
    console.log(result)

    alert("회원이 되신걸 축하드립니다!")
  }

  return (
    <main className="max-w-screen-xl flex flex-col mx-auto">
      <h2 className="font-bold text-3xl text-center my-11">
        회원가입
      </h2>
      <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
        <div className="grid gap-y-1 w-full">
          <label className="text-sm font-semibold">이메일</label>
          <input
            type="email"
            className="border w-full px-6 py-3 rounded border-slate-400 focus:border-black outline-none transition"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-y-1 w-full">
          <label className="text-sm font-semibold">비밀번호</label>
          <input
            type="password"
            className="border w-full px-6 py-3 rounded border-slate-400 focus:border-black outline-none transition"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="grid gap-y-1 w-full">
          <label className="text-sm font-semibold">비밀번호 확인</label>
          <input
            type="password"
            className="border w-full px-6 py-3 rounded border-slate-400 focus:border-black outline-none transition"
            onChange={(e) => setCheckPass(e.target.value)}
          />
        </div>
        <button className="w-full px-6 py-3 bg-black text-white mt-6" onClick={handleClickSignUp}>회원가입</button>
      </section>
    </main>
  );
}

export default SignUpPage;
