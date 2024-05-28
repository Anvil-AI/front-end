"use client"

import Bottombar from "@/components/bottombar/Bottombar";
import Navbar from "@/components/navbar/Navbar";
import { NavbarLocation } from "@/shared/enums/NavbarLocation";

export default function Dashboard() {
  return (
    <div>
      <Navbar location={NavbarLocation.dashboard}></Navbar>
      
      <Bottombar></Bottombar>
    </div>
  );
}
