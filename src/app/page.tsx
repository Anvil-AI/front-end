'use client';
import React from "react";
import Image from "next/image";
import GradientMouse from "@/components/gradient/page";
import Link from "next/link";

export default function Home() {
  return (

    <div className="h-screen flex flex-col">

      <GradientMouse />

      <div className="flex flex-col flex-1 justify-center items-center h-screen">
        <h1 className="text-9xl"> Eva</h1>
        {/* <p>Olá, usuário!</p>
        <p>Sou a inteligência artificial que irá guiar seus estudos</p> */}
      </div>

      <div className="pb-6 flex justify-between">

        <div className="pl-20 relative">
          <input type="text" className="bg-transparent border-b border-gray-700 py-1 focus:outline-none focus:border-orange-600 focus:border-b-2 transition-colors peer" />
          <label className="pl-20 absolute left-0 top-1 text-black cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-600 transition-all">E-mail</label>
        </div>

        <div className="flex flex-col h-full justify-center items-center">
          <div className="pb-3">
            <button className="mr-4 p-1">
              <Link href="/home">Login</Link>
            </button>

            <button className="ml-4 p-1">
            <Link href="/cadastro">Cadastrar</Link>
            </button>
          </div>

          <div className="">
            <button>
              Esqueci a senha
            </button>
          </div>
        </div>

        <div className="pr-20 relative">
          <input type="password" className="bg-transparent border-gray-700 border-b py-1 focus:outline-none focus:border-orange-600 focus:border-b-2 transition-colors peer" />
          <label className="pr-20 absolute left-0 top-1 text-black cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-600 transition-all">Senha</label>
        </div>

      </div>

    </div>
  );
}
