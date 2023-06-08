import { React } from "react";
const Locked = ({isLocked, isActive, isEmailVerified}) => {
    var bg = "bg-green-500";
    var bgText = "Active";
    if (isLocked && !isActive) {
        bgText = "Locked - Not Active";
        bg = "bg-red-500";
    }
    if (isLocked) {
        bgText = "Locked";
        bg = "bg-red-500";
    }
    if (!isActive) {
        bgText = "Not Active";
        bg = "bg-red-500";
    }
    if (!isLocked && isActive && !isEmailVerified) {
        bg = "bg-orange-500";
        bgText = "Pending Email Activation";
    }

    return (
        <>
            <span aria-hidden="true"
                  className={"w-3 h-3 rounded-full inline-block align-middle " + bg}>
            </span>
            <span className="pl-2">
                {bgText}
            </span>
        </>

    )
}

export default Locked