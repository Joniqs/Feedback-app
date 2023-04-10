import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

/**
 * A component that displays an individual feedback item with its rating and text.
 * @param {Object} props - The props object containing the feedback item.
 * @param {Object} props.item - The feedback item to display.
 * @param {number} props.item.rating - The rating of the feedback item.
 * @param {string} props.item.text - The text of the feedback item.
 * @returns {JSX.Element} - A JSX element representing the Feedbackitem component.
 */
const Feedbackitem = ({ item, handleDelete }) => {
  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className='close'>
          <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
  /**
   * The feedback item to display.
   */
  item: PropTypes.shape({
    /**
     * The rating of the feedback item.
     */
    rating: PropTypes.number.isRequired,
    /**
     * The text of the feedback item.
     */
    text: PropTypes.string.isRequired
  })
}

export default Feedbackitem;