import PropTypes from 'prop-types'
import Feedbackitem from "./Feedbackitem"

/**
 * A list component for displaying feedback.
 *
 * @component
 * @param {object} props - The props object.
 * @param {Array<object>} props.feedback - The array of feedback items.
 * @returns {JSX.Element} - The feedback list component.
 */
const FeedbackList = ({feedback}) => {
    if(!feedback || feedback.length === 0 ) {
        return <p>No Feedback Yet</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <Feedbackitem key={item.id} item={item} />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    /**
     * The array of feedback items.
     */
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The unique identifier of the feedback item.
             */
            id: PropTypes.number.isRequired,
            /**
             * The text content of the feedback item.
             */
            text: PropTypes.string.isRequired,
            /**
             * The rating of the feedback item.
             */
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList