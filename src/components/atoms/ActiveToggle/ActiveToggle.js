import React from 'react'

const ActiveToggle = ({isActive = true}) => {
  const label = isActive ? 'On': 'Off';
  const bg  = isActive ? 'bg-indigo-400': 'bg-gray-400';
  const text  = isActive ? 'text-indigo-400': 'text-gray-400';

  return <div className={`inline-flex flex-row${!isActive && '-reverse'} gap-[5px] items-center ${text} font-normal bg-gray-200 rounded-[10px] p-[0px_5px]`}>
    {label}
    <div className={`w-[14px] h-[14px] rounded-[7px] ${bg}`} />
  </div>
}

export default ActiveToggle