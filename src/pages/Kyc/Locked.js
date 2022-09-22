import { React } from "react";
const Locked = ({isLocked}) => { 
    return (
        <>
            <span aria-hidden="true" className={"w-3 h-3 rounded-full inline-block align-middle " + ((isLocked) ? "bg-red-500" : "bg-green-500")}>
            </span>
            <span className="pl-2">
                {isLocked ? "Locked" : "Unlocked"}
            </span> 
        </>

    )
}

export default Locked