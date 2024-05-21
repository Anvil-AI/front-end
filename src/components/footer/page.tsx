'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex fixed bottom-0 w-full justify-between text-5xl py-4">
            <button>
                <Link href="/perfil">🙇🏿</Link>
            </button>

            <button>
                <Link href="/home">🏠</Link>
            </button>

            <button>
                <Link href="/performance">📊</Link>
            </button>

            <button>
                <Link href="/config">⚙️</Link>
            </button>
        </div>
    );
}





