import React, {useState} from "react";

const ResetAmlModal = ({hidePopup, resetAml, ...props}) => {
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
                    <button onClick={() => resetAml(reason)} disabled={reason === ''}
                            className={'bg-[#52b2b6] hover:opacity-80 text-xs text-center font-bold py-3 px-4 rounded w-full mb-2 disabled:opacity-100 disabled:bg-[#DFDFE2FF] text-white'}>Confirm
                    </button>
                </div>
            </div>
        </>
    )
}

ResetAmlModal.propTypes = {}

ResetAmlModal.defaultProps = {}

export default ResetAmlModal
