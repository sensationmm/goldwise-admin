import { React } from "react";
const Locked = ({isLocked, isActive, isEmailVerified}) => {
    return (
        <>
            <span aria-hidden="true"
                  className={"w-3 h-3 rounded-full inline-block align-middle " + (isLocked || !isActive ? "bg-red-500" : !isActive || !isEmailVerified ? "bg-orange-500" : "bg-green-500")}>
            </span>
            <span className="pl-2">
                {isLocked && !isActive ? "Locked - Not Active" : isLocked ? "Locked": !isActive ? "Not Active" : !isEmailVerified? "Pending Email Activation" : "Active"}
            </span>
        </>

    )
}

export default Locked