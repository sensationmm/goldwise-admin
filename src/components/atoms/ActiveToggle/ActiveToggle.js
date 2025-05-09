import React from 'react'

const ActiveToggle = ({isActive = true}) => {
  const label = isActive ? 'On': 'Off';
  const color  = isActive ? 'indigo-400': 'indigo-400';

  return <div className={`flex gap-[5px] items-center text-${color} font-normal`}>
    {label}
    <div className={`w-[14px] h-[14px] rounded-[7px] bg-${color}`} />
  </div>
}

export default ActiveToggle