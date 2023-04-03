/**
 * A header component with customizable text, background color, and text color.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} [props.text="Feedback UI"] - The text to display in the header.
 * @param {string} [props.bgColor="rgba(0,0,0,0.4)"] - The background color of the header.
 * @param {string} [props.textColor="ff6a95"] - The color of the text in the header.
 *
 * @example
 * // Render a Header component with custom text and colors
 * <Header text="My Custom Header" bgColor="#e6f7ff" textColor="#333333" />
 */
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({text, bgColor, textColor}) => {
    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor
    }
  return (
    <header style={headerStyles}>
        <div className='container'>
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: 'ff6a95',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header;