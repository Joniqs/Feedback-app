import PropTypes from 'prop-types'

/**
 * A reusable card component that can be customized with background color and text color.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the card.
 * @param {boolean} [props.reverse=false] - Determines if the card has a reversed color scheme.
 * @returns {JSX.Element} - A card component.
 */

const Card = ({children, reverse }) => {
  return (
    <div 
        className="card" 
        style={{
            backgroundColor: reverse ? "rgba(0,0,0,0.4)" : '#fff',
            color: reverse ? "#fff" : "#000",
        }}
    >
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card