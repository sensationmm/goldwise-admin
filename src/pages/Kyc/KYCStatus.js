import { Chip } from "@mui/material";
import { React } from "react";

const KYCStatus = ({status, statusDescription}) => {
  const color = ([5,9].includes(status) ? "bg-emerald-400" : status===8 ? "bg-orange-400" : "bg-rose-500");
  
  return (
    <Chip label={statusDescription ? statusDescription : "Not Started"} className={`${color} w-full`} />
  );
}

export default KYCStatus