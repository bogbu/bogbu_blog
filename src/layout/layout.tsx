import React from "react";
import {Header} from "@/components/header";

export const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={"relative"}>
            <Header/>
            {children}
        </div>
    );
}