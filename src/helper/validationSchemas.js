import * as yup from 'yup'

// Login schema
export const loginValidationSchema = yup.object().shape({
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email address is required'),
    password: yup.string().required('Password is required')
}).required()

