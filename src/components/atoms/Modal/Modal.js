import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";

const Modal = ({hidePopup, title, confirmLabel, ...props}) => {
    return (
      <>
        <div className='modal-background ' onClick={hidePopup}/>
        <div className='modal-main-container'>
          <div className='modal-container  bg-white dark:bg-gray-600'>
            <div className='modal-header'>
              <p className="text-left text-xl font-extrabold text-gray-800 dark:text-gray-100">{title}</p>
            </div>

            <div className="modal-close"><CloseIcon onClick={hidePopup} style={{color: '#DFE2FF'}} /></div>

            {props.children}

            <div className="modal-buttons">
              <Button
                label="Cancel"
                className="w-full uppercase bg-[#bfc0c5] border-0 text-[#fff]"
                variant="container"
                size="large"
                onClick={hidePopup}
              >Cancel</Button>

              <Button
                className="w-full uppercase bg-[#6fd395] border-0"
                primary
                variant="contained"
                size="large"
                onClick={hidePopup}
              >{confirmLabel ?? 'Confirm'}</Button>
            </div>
          </div>
        </div>
      </>
    )
}

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
