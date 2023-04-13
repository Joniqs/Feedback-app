/**

A React component that displays a list of feedback items using Framer Motion for animation.
@component
@example
<FeedbackList />
@returns {JSX.Element} A div element containing the list of feedback items
*/
import { motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import Feedbackitem from "./Feedbackitem"
import FeedbackContext from './context/FeedbackContext'

const FeedbackList = () => {
    const {feedback} = useContext(FeedbackContext)

    /**
     * If there is no feedback or the feedback array is empty, display a message saying so.
     * @returns {JSX.Element} A p element containing the message "No Feedback Yet"
     */
    if(!feedback || feedback.length === 0 ) {
        return <p>No Feedback Yet</p>
    }

    /**
     * Render the feedback items with Framer Motion animation.
     * @returns {JSX.Element} A div element containing the list of feedback items with animation
     */
    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Feedbackitem key={item.id} item={item} />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList