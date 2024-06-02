"use client"

import BackButton from "@/components/back-button/BackButton";

export default function Login() {
  return (
    <div 
    className="
      min-h-screen
      bg-gradient-to-r
      from-[#6EFC6B]
      to-[#FFFFFF]
      flex
      flex-row
      p-12
      justify-between
    ">
      <BackButton></BackButton>
      <div 
      className="
        flex
        w-1/2
        justify-center
      ">
        <h1 className="font-body self-center text-14xl select-none">Eva</h1>
      </div>
      <form action="" method="post" 
      className="
        flex
        flex-col
        w-1/2
        px-24
        justify-center
      ">
        <input 
        type="email" 
        name={"email"} 
        id={"email"} 
        placeholder="Email" 
        className="
          placeholder:font-body
          placeholder:text-black/80
          placeholder:select-none
          text-black/80
          focus:outline-none
          border-black
          border-b
          bg-transparent
          mb-8
        "/>
        <input 
        type="password" 
        name={"password"} 
        id={"password"}
        placeholder="Senha" 
        className="
          placeholder:font-body
          placeholder:text-black/80
          placeholder:select-none
          text-black/80
          focus:outline-none
          border-black
          border-b
          bg-transparent
          mb-8
        "/>
        <button 
        type="submit"
        className="
          self-center
          bg-gray-200
          font-body
          w-2/5
          py-2
          rounded-lg
          mt-16
          text-base
          select-none
        ">Entrar</button>
      </form>
    </div>
  );
}
