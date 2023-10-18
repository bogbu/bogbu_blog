import React from "react";
import {Logo} from "@/layout/logo";

export const Header = () => {
    return (
        <header className={"w-full flex sticky h-10"}>
            <ul className={"flex w-full justify-center items-center gap-3"}>
                <li>Menu1</li>
                <li>Menu1</li>
                <li>Menu1</li>
                <li>Menu1</li>
            </ul>
        </header>
    );
}