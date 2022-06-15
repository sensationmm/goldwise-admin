import React from 'react'

import Input from './Input'

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        iconClassName: {
            options: ['fa fa-eye-slash', 'fa fa-eye']
        }
    }
}

const Template = (args) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {
    type: 'text',
    label: 'Text',
    placeholder: 'Email Address'
}

export const Password = Template.bind({})
Password.args = {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter Your Password',
    showIcon: true
}