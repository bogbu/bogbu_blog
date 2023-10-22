import React from "react";
import "./layout.scss";
import {Gnb} from "@/components/gnb";
import {newspaperFont} from "@/assets/font/font";
import {Logo} from "@/layout/logo";

export const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={`layout ${newspaperFont.className}`}>
            <Gnb/>
            <div className={"contents"}>
                <Logo/>
                {children}
            </div>
        </div>
    );
}