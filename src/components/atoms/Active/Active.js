import { Chip } from '@mui/material';
import React from 'react'

const Active = ({isActive = true, invert = false}) => {
  const label = isActive ? 'Yes': 'No';
  const ok = invert ? !isActive : isActive;
  const color  = ok ? 'bg-emerald-400': 'bg-rose-500';

  return <Chip label={label} className={`${color} w-full`} />;
}

export default Active