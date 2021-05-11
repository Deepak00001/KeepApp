import React from "react";
import logo from "./Images/keep.png"

const Header = () => {
    return(
        <>
            <div className="header">
                <img src={logo} alt="logo" className="imglogo"/>
                <h1 className="hone">Keep Notes</h1>
            </div>
        </>
    )

}
export default Header;