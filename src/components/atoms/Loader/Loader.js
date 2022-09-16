import React from "react";
import "./loader.css";

const Loader = ({load}) => {
    return (
        <>
            {load ? <div className="loader"></div> : ''}
        </>

    )
}

export default Loader