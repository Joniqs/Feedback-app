import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'
/**
 * A component that displays feedback statistics, such as the total number of reviews and the average rating.
 *
 * @param {object} props - The props object for the FeedbackStats component.
 * @param {array} props.feedback - An array of feedback objects to display the statistics for.
 *
 * @returns {JSX.Element} A React functional component that renders feedback statistics.
 */
const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext)

    // Calculate ratings avg
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[..]0$/, '')
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats