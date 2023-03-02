import React from "react";

const Modal = ({hidePopup, title, ...props}) => {
    return (<>
            <div className='modal-background ' onClick={() => hidePopup()}/>
            <div className='modal-main-container'>
                <div className='modal-container  bg-white dark:bg-gray-600'>
                    <div className='modal-header'>
                        <p className="text-left text-xl font-extrabold text-gray-800 dark:text-gray-100">{title}</p>
                        <i onClick={() => hidePopup()} style={{color: '#DFDFE2FF'}} className='hover:text-gray-800 fa fa-times-circle fa-2x'/>
                    </div>
                {props.children}
                </div>
            </div>
        </>

    )
}

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
