'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cadastro() {
    return (
        <div className="bg-white flex justify-around">
            <div className=" flex bg-yellow-400 text-9xl h-screen w-screen justify-center items-center">
                <a>Eva</a>
            </div>

            <div className="flex bg-blue-500 h-screen w-screen justify-center items-center">
                <div>
                    <label>Nome Completo</label>
                    <input />
                </div>

                <div>
                    <label>Nome Completo</label>
                    <input />
                </div>
                
                <div>
                    <label>Nome Completo</label>
                    <input/>
                </div>
            </div>
        </div>



    );
}


{/* <div className="flex">
                <button className="text-9xl">
                    <Link href="/">⬅️</Link>
                </button>

                <h1 className="text-9xl"> Cadastro</h1>

                <button className="text-9xl">
                    <Link href="/home">🏠</Link>
                </button>
            </div> */}