import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import Input from "../../../components/atoms/Input/Input";

const AddUserModal = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [role, setRole] = useState(undefined)

    return (
      <div className='modal-content'>
        <div className="add-user">
          <Input
            id="user-name"
            labelId="user-name"
            type='text'
            label='Name'
            name={'name'}
            value={userName}
            onChange={setUserName}
          />

          <Input
            id="user-email"
            labelId="user-email"
            type='text'
            label='Email Address'
            name={'Email Address'}
            value={email}
            onChange={setEmail }
          />

          <Input
            id="user-mobile"
            labelId="user-mobile"
            type='number'
            label='2FA Mobile Number'
            value={mobile}
            onChange={setMobile}
          />

          <Input
            id="user-password"
            labelId="user-password"
            type={'password'}
            label="Password"
            placeholder='Enter Your Password'
            name={'password'}
            showIcon
            onSelectEye={() => setShowPassword(!showPassword)}
            iconClassName={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
            value={password}
            onChange={setPassword}
          />

          <Input
            id="user-passwordConfirm"
            labelId="user-passwordConfirm"
            type={'password'}
            label="Password Confim"
            placeholder='Enter Your Password'
            name={'password'}
            showIcon
            onSelectEye={() => setShowPassword(!showPassword)}
            iconClassName={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
            value={password}
            onChange={setPassword}
          />

          <FormControl>
            <InputLabel id="user-role">User Role</InputLabel>
            <Select
              id="user-role"
              labelId="user-role"
              label="User Role"
              value={role}
              onChange={e => setRole(e.target.value)}
            >
              <MenuItem value={1}>Super Admin</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    )
}

AddUserModal.propTypes = {}

AddUserModal.defaultProps = {}

export default AddUserModal
