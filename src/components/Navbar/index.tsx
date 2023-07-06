import React from 'react'
import TopBar from "@/components/Navbar/TopBar";
import Menu from "@/components/Navbar/Menu";
export default function Navbar() {
    return (
        <nav className={"py-6"}>
            <TopBar />
            <Menu />
        </nav>
    )
}
