import { React } from "react";

const KYCStatus = ({status, statusDescription}) => {
    return (
        <>
            <span
                aria-hidden="true"
                  className={"w-3 h-3 rounded-full inline-block align-middle " + ([5,9].includes(status) ? " bg-green-500 " : status===8 ? " bg-orange-500 " : " bg-red-500 ")}
            >
            </span>
            <span className="pl-2">
                {statusDescription}
            </span>
        </>
    );
}

export default KYCStatus