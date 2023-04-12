import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from './context/FeedbackContext'

/**
 * A component that displays an individual feedback item with its rating and text.
 * @param {Object} props - The props object containing the feedback item.
 * @param {Object} props.item - The feedback item to display.
 * @param {number} props.item.rating - The rating of the feedback item.
 * @param {string} props.item.text - The text of the feedback item.
 * @returns {JSX.Element} - A JSX element representing the Feedbackitem component.
 */
const Feedbackitem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext) 

  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)} className='edit'>
          <FaEdit color='purple' />
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired
}

export default Feedbackitem;