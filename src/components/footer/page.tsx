'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex fixed bottom-0 w-full justify-center items-center h-20"> {/*bg-white border-t border-gray-300*/}
            <div className="bg-white py-2 px-6 rounded-3xl border-2 border-gray-400 shadow-md shadow-slate-800">
                <button className="mx-4 text-2xl">
                    <Link href="/perfil">🙇🏿</Link>
                </button>

                <button className="mx-4 text-2xl ">
                    <Link href="/home">🏠</Link>
                </button>

                <button className="mx-4 text-2xl">
                    <Link href="/performance">📊</Link>
                </button>

                <button className="mx-4 text-2xl">
                    <Link href="/config">⚙️</Link>
                </button>
            </div>
        </div>
    );
}





