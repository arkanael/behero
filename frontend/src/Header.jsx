import React from "react";

export default function Header({children}){
    return(
        <div>
            <header>
                <h1>{children}</h1>
            </header>   
        </div>
    );
}