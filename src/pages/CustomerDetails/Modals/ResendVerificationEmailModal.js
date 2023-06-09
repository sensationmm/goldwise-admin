import React, {useState} from "react";

const ResendVerificationEmailModal = ({hidePopup, resendVerificationEmail, isEmailVerify, ...props}) => {
    return (<>
            <div className='modal-buttons'>
                <div className='modal-button'>
                    <button onClick={() => hidePopup()}
                            className='bg-[#DFDFE2FF] hover:opacity-80 text-grey text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Cancel
                    </button>
                </div>
                <div className='modal-button'>
                    <button onClick={() => resendVerificationEmail()} disabled={isEmailVerify === true} 
                            className={'bg-[#52b2b6] hover:opacity-80 text-xs text-center font-bold py-3 px-4 rounded w-full mb-2 disabled:opacity-100 disabled:bg-[#DFDFE2FF] text-white'}>Confirm
                    </button>
                </div>
            </div>
        </>
    )
}

ResendVerificationEmailModal.propTypes = {}

ResendVerificationEmailModal.defaultProps = {}

export default ResendVerificationEmailModal
