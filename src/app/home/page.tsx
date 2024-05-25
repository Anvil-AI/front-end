'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/page";

export default function HomePage() {
    return (
        <div className="pb-24">
            <div className="flex justify-center pt-96">
                <a>Home</a>
            </div>
            <div className="flex justify-center pt-96">
                <a>Home</a>
            </div>
            <Footer/>
        </div>
    );
}