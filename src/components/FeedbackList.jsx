import { motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import Feedbackitem from "./Feedbackitem"
import FeedbackContext from './context/FeedbackContext'
/**
 * A list component for displaying feedback.
 *
 * @component
 * @param {object} props - The props object.
 * @param {Array<object>} props.feedback - The array of feedback items.
 * @returns {JSX.Element} - The feedback list component.
 */
const FeedbackList = () => {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0 ) {
        return <p>No Feedback Yet</p>
    }
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