import {generalFont, newspaperFont} from "@/assets/font/font";
import {Logo} from "@/layout/logo";
import React from "react";

export default function Home() {
    return (
        <div className={"w-full "}>
            <div className={newspaperFont.className}>
                Main Page
                <div className={generalFont.className}>
                    메인 페이지
                </div>
            </div>
        </div>

    )
}
