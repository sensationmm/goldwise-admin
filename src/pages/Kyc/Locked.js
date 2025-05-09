import { Chip } from "@mui/material";
import { React } from "react";
const Locked = ({isLocked, isActive, isEmailVerified}) => {
    var bg = "bg-emerald-400";
    var bgText = "Active";
    if (isLocked && !isActive) {
        bgText = "Locked - Not Active";
        bg = "bg-rose-500";
    }
    if (isLocked) {
        bgText = "Locked";
        bg = "bg-rose-500";
    }
    if (!isActive) {
        bgText = "Not Active";
        bg = "bg-rose-500";
    }
    if (!isLocked && isActive && !isEmailVerified) {
        bg = "bg-orange-400";
        bgText = "Pending Email Activation";
    }

    return (
      <Chip label={bgText} className={`${bg} w-full`} />
    )
}

export default Locked