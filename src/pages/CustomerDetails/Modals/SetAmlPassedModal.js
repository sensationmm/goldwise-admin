import React, {useState} from "react";

const SetAmlPassedModal = ({hidePopup, setAmlPassed, ...props}) => {
    const [reason, setReason] = useState('')

    return (<>
            <div className='modal-content'>
                <div className="pt-3">
                    <div className="content-text">
                        <p className="text-gray-400 dark:text-gray-100 font-bold">Reason</p>
                        <p className="text-gray-200 text-sm dark:text-gray-100 font-bold">Required</p>
                    </div>
                    <textarea value={reason}
                              onChange={(value) => setReason(value.target.value)}
                              className="mt-2"/>
                </div>
            </div>
            <div className='modal-buttons'>
                <div className='modal-button'>
                    <button onClick={() => hidePopup()}
                            className='bg-[#DFDFE2FF] hover:opacity-80 text-grey text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Cancel
                    </button>
                </div>
                <div className='modal-button'>
                    <button onClick={() => setAmlPassed(reason)}
                            className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-centers font-bold py-3 px-4 rounded w-full mb-2'>Confirm
                    </button>
                </div>
            </div>
        </>
    )
}

SetAmlPassedModal.propTypes = {}

SetAmlPassedModal.defaultProps = {}

export default SetAmlPassedModal
