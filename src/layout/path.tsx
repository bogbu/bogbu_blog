'use client'
import {usePathname} from "next/navigation";
import './path.scss';

export const Path = () => {
    const path = usePathname();
    const deleteSlash = (fullPath: string) => {
        debugger;
        // console.log(fullPath, "fullPath");
        let changePath = "";
        if (fullPath.includes('/')) {
            changePath = fullPath.replace('/', '');
        }
        if (fullPath === '/') {
            changePath = "Main Page";
        }
        console.log(changePath, "changePath");
        return changePath;
    }
    return (
        <div className={"path"}>
            {deleteSlash(path)}
        </div>
    )
}