import PropTypes from 'prop-types'

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button
            type={props.type ? props.type : 'button'}
            className={['button', `button--${size}`, mode].join(' ')}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {props.children || label}
        </button>
    )
}

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
}

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
}

export default Button
