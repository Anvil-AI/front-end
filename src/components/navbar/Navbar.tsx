import { NavbarLocation } from "@/shared/enums/NavbarLocation";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface NavbarProps {
    location: NavbarLocation
}

export default function Navbar(props: NavbarProps) {
    const homeAnchor = useRef<HTMLAnchorElement>(null)
    const dashboardAnchor = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        if (props.location == NavbarLocation.home) {
            homeAnchor.current?.classList.add("border-b-2", "border-black")
        } else {
            dashboardAnchor.current?.classList.add("border-b-2", "border-black")
        }
    })

    return (
        <div
        className="
        flex
        flex-col
        font-body
        p-0
        ">
            <Image 
            src={"/eva.svg"} 
            alt={""} 
            width={122} 
            height={76}
            className="
                ml-8
                mt-4
            "></Image>
            <div 
            className="
                flex
                justify-center
                border-b-2
            ">
                <a 
                href="/home"
                ref={homeAnchor}
                className="
                    hover:transition-border 
                    hover:duration-200 
                    transition-border 
                    duration-100
                    ease-in-out 
                    border-b-2
                    hover:border-gray-400
                ">Para hoje</a>
                <div
                className="
                    mx-3
                "></div>
                <a 
                href="/dashboard" 
                ref={dashboardAnchor}
                className="
                    hover:transition-border 
                    hover:duration-200 
                    transition-border 
                    duration-100
                    ease-in-out 
                    border-b-2
                    hover:border-gray-400
                ">Dashboard</a>
            </div>
        </div>
    )
}