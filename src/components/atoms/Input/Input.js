// import PropTypes from 'prop-types'
import { FormControl, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Input = ({
  id,
  type = 'text',
  value,
  label,
  labelId,
  onChange,
  showIcon,
  formRef
}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <FormControl>
        <TextField
          id={id}
          type={type === 'password' && showPassword ? 'text' : type}
          labelId={labelId}
          label={label}
          value={value}
          onChange={(ev) => onChange(ev.target.value) }
          {...formRef}
          InputProps={{
            endAdornment: showIcon && (
              <InputAdornment
                position="end"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    )
}

Input.propTypes = {

}

Input.defaultProps = {

}

export default Input
