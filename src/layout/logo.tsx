import {newspaperFont} from "@/assets/font/font";
import "./logo.scss";
import Link from "next/link";

export const Logo = () => {
    return (
        <div className={"logoWrapper"}>
            <div className={`${newspaperFont.className} logo`}>
                <Link href={'/'}>Daily Bogbu</Link>
            </div>
        </div>
    )
}