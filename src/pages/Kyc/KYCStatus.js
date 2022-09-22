import { React } from "react";

const statusMap = ["green", "red", "orange"]
const KYCStatus = ({status, statusDescription}) => {
    return (
        <>
            <span aria-hidden="true" className={"w-3 h-3 rounded-full bg-"+statusMap[status]+"-500 inline-block align-middle"}>
            </span>
            <span className="pl-2">
                {statusDescription}
            </span>
        </>
    );
}

export default KYCStatus