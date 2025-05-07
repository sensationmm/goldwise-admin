import React from 'react'

const Flag = (props) => {
    return (
        <>
            <img src={props.src} title={props.title} alt={props.alt} className='flag' />
        </>
    )
}

export default Flag