// import PropTypes from 'prop-types'
import './input.scss'

const Input = ({
    type,
    className,
    placeholder,
    value,
    label,
    onChange,
    name,
    showIcon,
    onSelectEye,
    iconClassName,
    ...props
}) => {
    return (
        <div className='input-field'>
            {label && <label>{label}</label>}
            <input
                type={type}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                {...props}
            />
            {showIcon && <i onClick={onSelectEye} className={iconClassName}></i>}
        </div>
    )
}

Input.propTypes = {

}

Input.defaultProps = {

}

export default Input
