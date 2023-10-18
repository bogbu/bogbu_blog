import Image from 'next/image'
import {generalFont, newspaperFont} from "@/assets/font/font";

export default function Home() {
    return (
        <div className={newspaperFont.className}>
            Main Page
            <div className={generalFont.className}>
                메인 페이지
            </div>
        </div>
    )
}
