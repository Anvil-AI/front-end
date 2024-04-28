'use client';
import React from "react";
import Image from "next/image";
import GradientPage from "@/components/gradient/page";

export default function Home() {
  return (

    <div className="h-screen flex flex-col">

      <GradientPage />

      <div className="flex flex-col flex-1 justify-center items-center h-screen">
        <h1 className="text-9xl"> Eva</h1>
        <p>Olá,usuario!</p>
        <p>Sou a inteligência artificial que irá guiar seus estudos</p>
      </div>

      <div className="pb-6 flex justify-between">

        <div className="relative">
          <input type="text" className="bg-transparent border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer" />
          <label className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all">E-mail</label>
        </div>  

        <div className="pr-20">
          <label>Senha</label>
          <input
            type="password" className="border-b bg-transparent focus:outline-none"/>
        </div>
      
      </div>

    </div>
  );
}


// .inputContainer {
//   position: relative;
//   margin-bottom: 1.5rem;
// }

// .inputPlaceholder {
//   position: absolute;
//   top: 50%;
//   left: 10px; /* ou qualquer valor que você preferir para o espaçamento à esquerda */
//   transform: translateY(-50%);
//   transition: top 0.3s, font-size 0.3s; /* Adiciona transição para suavizar a mudança de posição e tamanho */
//   pointer-events: none; /* Permite que cliques passem através do elemento */
//   color: #606060;
  
// }

// .inputField {
//   padding: 10px; /* Ajuste conforme necessário para o espaçamento interno do campo de entrada */
//   z-index: 1; /* Garante que o campo de entrada está acima do texto do placeholder */
//   outline: none;
//   border-radius: 1rem;
//   width: 20rem;
  

// }

// .inputField:focus + .inputPlaceholder,
// .inputField:not(:placeholder-shown) + .inputPlaceholder {
//   top: 0;
//   font-size: 12px; /* ou qualquer tamanho que você preferir para o texto acima do placeholder */
// }