import Link from "next/link"

function Header() {

  return (
    <header className="w-full h-[60px] border-b flex flex-nowrap justify-between items-center p-4">
        <Link className="font-bold text-2xl" href={"/"}>발랑</Link>
        <div className="flex flex-nowrap gap-4">
        <Link href={"/auth/sign-up"}>회원가입</Link>
        <Link href={"/auth/log-in"}>로그인</Link>
        </div>
    </header>
  )
}

export default Header