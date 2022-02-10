import React from "react";
import {Welcome} from "./Welcome";

export const Header = () => {
    return (
        <div>
            <h1 className="font-site-name text-center mt-3">sattamattka.com</h1>
            <Welcome />
        </div>
    )
}