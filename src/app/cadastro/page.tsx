'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cadastro() {
    return (
        <div className="h-screen">
            <div className="flex">
                <button className="text-9xl">
                    <Link href="/">⬅️</Link>
                </button>

                <h1 className="text-9xl"> Cadastro</h1>

                <button className="text-9xl">
                    <Link href="/home">🏠</Link>
                </button>

            </div>
        </div>



    );
}