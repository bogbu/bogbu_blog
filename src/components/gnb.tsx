import React from "react";

import {GnbArray} from "./gnbArray";
import ActiveLink from "@/utils/activeLink";


export const Gnb = () => {
    return (
        <header className={"gnb"}>
            <ul className={"gnbList"}>

                {
                    GnbArray.map((list) => {
                        return (
                            <li key={list.gnbName}>
                                <ActiveLink href={list.gnbPath}>
                                    {list.gnbName}
                                </ActiveLink>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    );
}