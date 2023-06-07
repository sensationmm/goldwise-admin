import React from 'react'
import "./Flag.scss"

const Flag = (props) => {
    return (
        <>
            <img src={props.src} title={props.title} alt={props.alt} className='flag' />
        </>
    )
}

export default Flag