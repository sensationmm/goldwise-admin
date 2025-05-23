import { useState } from 'react'
import { useDispatch } from "react-redux"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useLocation } from 'react-router-dom'
import Input from '../../components/atoms/Input'
import authService from '../../services/auth.service'
import { setAdmin } from '../../reducers/userSlice.reducer'
import { loginValidationSchema } from '../../helper/validationSchemas'
import { ReactSVG } from 'react-svg'
import Logo from '../../assets/images/logo.svg'
import { Button } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const dispatch = useDispatch()

    const formOptions = { resolver: yupResolver(loginValidationSchema) }

    // Get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions)
    const { errors, isSubmitting } = formState

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/dashboard"

    const onSubmit = async ({ email, password }) => {
        try {
            const response = await authService.login(email, password)
            dispatch(setAdmin(response))
            navigate(from, { replace: true })
        } catch (error) {
            setError('apiError', { message: error.message || error })
        }
    }

    return (
        <div className='login-container'>
            <div className='login-container__left'>
                <div className='logo-container'>
                  <div className={'w-[200px]'}><ReactSVG src={Logo} alt="Goldwise Logo" /></div>
                </div>
            </div>
            <div className='login-container__right'>
                <div className='container'>
                    <div className='form'>
                        <h2>Admin Portal</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group w-full">
                                <Input
                                  type='text'
                                  label='Email Address'
                                  placeholder='Email Address'
                                  name={'email'}
                                  formRef={{ ...register('email') }}
                                  value="test@test.com"
                                />
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>
                            <div className="form-group">
                              <Input
                                id="password"
                                labelId="password"
                                type={'password'}
                                label="Password"
                                placeholder='Enter Your Password'
                                name={'password'}
                                showIcon
                                value="123123123"
                                formRef={{ ...register('password') }}
                              />
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>

                            <div className='buttons'>
                                <Button disabled={isSubmitting} type='submit' size='large' primary variant='contained'>
                                    {isSubmitting ? <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i> : 'Login'}
                                </Button>
                            </div>

                            {errors.apiError &&
                                <div className="alert alert-danger">{errors.apiError?.message}</div>
                            }
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login