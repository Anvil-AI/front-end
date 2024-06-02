"use client"

import Bottombar from "@/components/bottombar/Bottombar";
import EvaQuestionResponse from "@/components/eva-question-response/EvaQuestionResponse";
import Navbar from "@/components/navbar/Navbar";
import Question from "@/components/question/Question";
import { NavbarLocation } from "@/shared/enums/NavbarLocation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar location={NavbarLocation.home}></Navbar>
      <div className="flex justify-center w-screen">
        <Question></Question>
        {/* <EvaQuestionResponse></EvaQuestionResponse> */}
      </div>
      <Bottombar></Bottombar>
    </div>
  );
}
