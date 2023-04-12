/**

Button Component
@param {Object} props - Component props
@param {node} props.children - Child elements to be rendered inside the button
@param {string} [props.version='primary'] - Button version, e.g. 'primary', 'secondary'
@param {string} [props.type='button'] - Button type, e.g. 'button', 'submit'
@param {bool} [props.isDisabled=false] - Flag indicating if button is disabled
@returns {JSX.Element} - Rendered Button component
*/

import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button
