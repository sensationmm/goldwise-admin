import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../../components/atoms/Button'
// import Input from '../../components/atoms/Input'
import authService from '../../services/auth.service'
import { loginValidationSchema } from '../../helper/validationSchemas'
import './login.scss'

const Login = () => {

    // TODO: Check what is the best place to get the api token
    useEffect(() => {
        authService.getApiToken(process.env.REACT_APP_API_USERNAME, process.env.REACT_APP_API_PASSWORD)
    }, [])

    const [eye, setEye] = useState(true)
    const [password, setPassword] = useState("password")
    const [type, setType] = useState(false)

    const formOptions = { resolver: yupResolver(loginValidationSchema) }

    // Get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions)
    const { errors } = formState

    const onSubmit = ({ email, password }) => {
        authService.login(email, password)
            .then(() => {
                // TODO: Add the redirection to Dashboard
            })
            .catch(error => {
                setError('apiError', { message: error.message || error })
            });
    }

    const onSelectEye = () => {
        if (password === 'password') {
            setPassword("text")
            setEye(false)
            setType(true)
        }
        else {
            setPassword('password')
            setEye(true)
            setType(false)
        }
    }

    return (
        <div className='login-container'>
            <div className='login-container__left'>
                <div className='logo-container'><label className='logo-label'>GOLDWISE</label></div>
            </div>
            <div className='login-container__right'>
                <div className='container'>
                    <div className='form'>
                        <h2>Admin Portal</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                {/* FIXME: Use the Input component react-hook-form 
                                register is not working */}
                                {/* <Input
                                    type='text'
                                    label='Email Address'
                                    placeholder='Email Address'
                                    name={'email'}
                                    className={`${errors.email ? 'is-invalid' : ''}`}
                                    {...register('email')}
                                /> */}
                                <div className='input-field'>
                                    <label>Email Address</label>
                                    <input type='text' className={`${errors.email ? 'is-invalid' : ''}`} placeholder='Email Address' name='email' {...register('email')} />
                                </div>
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>
                            <div className="form-group">
                                {/* FIXME: Use the Input component react-hook-form 
                                register is not working */}
                                {/* <Input
                                    label='Password'
                                    type={password}
                                    className={`${type ? 'type_password' : ''} ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder='Enter Your Password'
                                    name={'password'}
                                    showIcon
                                    onSelectEye={onSelectEye}
                                    iconClassName={`fa ${eye ? 'fa-eye-slash' : 'fa-eye'}`}
                                    {...register('password')}
                                /> */}
                                <div className='input-field'>
                                    <label>Password</label>
                                    <input type={password} className={`${type ? 'type_password' : ''} ${errors.password ? 'is-invalid' : ''}`} placeholder='Enter Your Password' name='password' {...register('password')} />
                                    <i onClick={onSelectEye} className={`fa ${eye ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </div>
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>

                            <div className='buttons'>
                                <Button disabled={formState.isSubmitting} type='submit' label='Login' size='large' primary>
                                    {formState.isSubmitting && <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>}
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