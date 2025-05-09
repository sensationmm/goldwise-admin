import { Chip } from '@mui/material';
import React from 'react'

const Active = ({isActive = true, isPending = false, invert = false}) => {
  const label = isActive ? 'Yes': isPending ? 'In Review' : 'No';
  const ok = invert ? !isActive : isActive;
  const color  = ok ? 'bg-emerald-400': isPending ? 'bg-orange-400' : 'bg-rose-500';

  return <Chip label={label} className={`${color} w-full text-slate-800 min-w-[120px]`} />;
}

export default Active