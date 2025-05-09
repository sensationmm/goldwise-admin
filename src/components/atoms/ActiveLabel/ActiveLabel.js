import React from 'react'

const ActiveLabel = ({isActive = true, isPending = false, isPlain = false}) => {
  const label = isActive ? 'Yes': isPending ? 'In Review' : 'No';
  const color  = isPlain ? 'text-gray-800' : isActive ? 'text-emerald-400': isPending ? 'text-orange-400' : 'text-rose-500';

  return <div className={`${color} w-full`}>{label}</div>;
}

export default ActiveLabel