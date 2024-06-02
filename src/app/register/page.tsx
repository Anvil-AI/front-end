"use client"

import BackButton from "@/components/back-button/BackButton";
import Link from "next/link";


export default function Register() {
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
        type="text" 
        name={"name"} 
        id={"name"} 
        placeholder="Nome completo" 
        className="
          placeholder:font-body
          placeholder:text-black/80
          placeholder:select-none
          focus:outline-none
          border-black
          border-b
          bg-transparent
          mb-8
        "/>
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
        type="email" 
        name={"emailConfirmation"} 
        id={"emailConfirmation"} 
        placeholder="Confirmação do email"  
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
        type="phone" 
        name={"phone"} 
        id={"phone"} 
        placeholder="Telefone" 
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

        <ul className="
        list-disc
        mb-8
        ">
          <span className="mb-2">A senha deve conter:</span>
          <li className="ml-6">Pelo menos 8 caracteres</li>
          <li className="ml-6">Uma letra maiscúla</li>
          <li className="ml-6">Uma letra minúscula</li>
          <li className="ml-6">Um número</li>
          <li className="ml-6">Um símbolo especial (!,@,#,$,...)</li>
        </ul>

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

        <input 
        type="password" 
        name={"passwordConfirmation"} 
        id={"passwordConfirmation"} 
        placeholder="Confirmação da senha" 
        className="
          placeholder:font-body
          placeholder:text-black/80
          placeholder:select-none
          text-black/80
          focus:outline-none
          border-black
          border-b
          bg-transparent
        "/>
        <button 
        type="submit"
        className="
          self-center
          bg-gray-400
          font-body
          w-2/5
          py-2
          rounded-lg
          mt-16
          text-base
          select-none
        ">
          <Link href="/">Criar conta</Link>
        </button>
      </form>
    </div>
  );
}
