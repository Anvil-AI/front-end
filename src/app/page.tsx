'use client';
import React from "react";
import Image from "next/image";
import GradientMouse from "../components/gradient/page";
import Link from "next/link";

export default function Home() {

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [message, setMessage] = useState('');

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   try {
//     const user = await loginUser(email, password);
//     setMessage(`Bem-vindo, ${user.name}`);
//   } catch (error) {
//     setMessage('Falha no login. Verifique suas credenciais.');
//   }
// };


  return (

    <div className="h-screen flex flex-col">

      <GradientMouse />

      <div className="flex flex-col items-center h-screen">
        <h1 className="font-body self-center text-14xl select-none mt-6">Eva</h1>
        <h2 className="font-body self-center text-base select-none">Olá, usuário</h2>
        <h3 className="font-body self-center text-base select-none">Eu sou a inteligência artificial que vai guiar seus estudos</h3>

      </div>

      <div className="mb-6 flex justify-between">

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
          ml-20
          w-1/5
        "
        //onChange={(e) => setEmail(e.target.value)}

        />

        <div className="flex flex-col h-full justify-center items-center">
          <div className="pb-3">
            <button className="mr-4 p-1 px-12 bg-gray-300 border-gray-400 border-2 rounded-2xl">
              <Link href="/home">Login</Link>
             </button> {/*{message && <p>{message}</p>} */}

            <button className="ml-4 mr-2 p-1 px-9 bg-gray-300 border-gray-400 border-2 rounded-2xl">
              <Link href="/register">Cadastrar</Link>
            </button> {/*{message && <p>{message}</p>} */}
          </div>

          {/* <div className="">
            <button>
              Esqueci a senha
            </button>
          </div> */}
        </div>

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
          mr-20
          w-1/5
        "
        //onChange={(e) => setPassword(e.target.value)}
        />
      </div>

    </div>
  );
}