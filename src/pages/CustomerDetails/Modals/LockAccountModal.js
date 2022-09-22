import React, {useEffect, useState} from "react";

const LockAccountModal = ({hidePopup, lockAccountCurrentStatus, saveLockAccountStatus}) => {
    const [lockAccountStatus, setLockAccountStatus] = useState(lockAccountCurrentStatus)
    const [reason, setReason] = useState('')

    useEffect(() => {
        setLockAccountStatus(lockAccountCurrentStatus)
    }, [lockAccountCurrentStatus])

    return (<>
            <div className='modal-content'>
                <div className="pb-3 switcher">
                    <p className="text-gray-400 dark:text-gray-100 font-bold">Lock Account</p>
                    <label htmlFor="default-toggle"
                           className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                               value={lockAccountStatus}
                               checked={lockAccountStatus}
                               onChange={() => setLockAccountStatus(!lockAccountStatus)}
                               id="default-toggle"
                               className="sr-only peer"/>
                        <div className="w-10 h-5 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 dark:border-gray-600 peer-checked:bg-[#52b2b6]"/>
                    </label>
                </div>
                <hr/>
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
                    <button onClick={() => saveLockAccountStatus(lockAccountStatus, reason)} disabled={reason === ''}
                            className={'bg-[#52b2b6] hover:opacity-80 text-xs text-center font-bold py-3 px-4 rounded w-full mb-2 disabled:opacity-100 disabled:bg-[#DFDFE2FF] text-white'}>Confirm
                    </button>
                </div>
            </div>
        </>
    )
}

LockAccountModal.propTypes = {}

LockAccountModal.defaultProps = {}

export default LockAccountModal
