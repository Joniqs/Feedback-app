import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react';

/**
 * @typedef {Object} FeedbackItem
 * @property {string} id - The unique identifier of the feedback.
 * @property {string} text - The content of the feedback.
 * @property {number} rating - The rating of the feedback.
 */

/**
 * @typedef {Object} FeedbackEdit
 * @property {FeedbackItem} item - The feedback item to edit.
 * @property {boolean} edit - Whether to edit the feedback item or not.
 */

/**
 * @typedef {Object} FeedbackContextValue
 * @property {FeedbackItem[]} feedback - An array of feedback items.
 * @property {function} deleteFeedback - A function to delete a feedback item.
 * @property {function} addFeedback - A function to add a new feedback item.
 * @property {function} editFeedback - A function to set the item to be updated.
 * @property {FeedbackEdit} feedbackEdit - The feedback item to edit and whether to edit it or not.
 * @property {function} updateFeedback - A function to update a feedback item.
 */

/**
 * @type {import('react').Context<FeedbackContextValue>}
 */
const FeedbackContext = createContext()

/**
 * @typedef {Object} FeedbackProviderProps
 * @property {React.ReactNode} children - The child components to render.
 */

/**
 * The provider component for the feedback context.
 * @param {FeedbackProviderProps} props - The props for the component.
 * @return {JSX.Element} The provider component.
 */
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from feedback 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is from feedback 2',
            rating: 8
        },
        {
            id: 3,
            text: 'This item is from feedback 3',
            rating: 5
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    /**
     * A function to delete a feedback item.
     * @param {string} id - The id of the feedback item to delete.
     * @return {void}
     */
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => 
                item.id !== id
            ))
        }
    }

    /**
     * A function to add a new feedback item.
     * @param {FeedbackItem} newFeedback - The new feedback item to add.
     * @return {void}
     */
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    /**
     * A function to set the item to be updated.
     * @param {FeedbackItem} item - The feedback item to update.
     * @return {void}
     */
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    /**
     * Updates a feedback item with new information.
     *
     * @function
     * @name updateFeedback
     * @param {number} id - The ID of the feedback item to be updated.
     * @param {Object} updItem - The updated information to be applied to the feedback item.
     * @returns {void}
     */
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem} : item))
    }

    /**
     * Provides a context for storing and accessing feedback data and functions.
     *
     * @constant
     * @name FeedbackContext
     * @type {object}
     * @property {Array} feedback - An array of feedback items.
     * @property {Function} deleteFeedback - A function for deleting a feedback item.
     * @property {Function} addFeedback - A function for adding a new feedback item.
     * @property {Function} editFeedback - A function for setting an item to be updated.
     * @property {object} feedbackEdit - An object containing information about the item being edited.
     * @property {Function} updateFeedback - A function for updating a feedback item.
     */

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}
/**
 * The context for storing and accessing feedback data and functions.
 *
 * @module FeedbackContext
 */
export default FeedbackContext