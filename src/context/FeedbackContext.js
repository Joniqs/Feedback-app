import { createContext, useState, useEffect } from 'react';

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
 * @property {FeedbackEdit} feedbackEdit - An object containing information about the item being edited.
 * @property {boolean} isLoading - Whether feedback data is being loaded or not.
 * @property {function} deleteFeedback - A function to delete a feedback item.
 * @property {function} addFeedback - A function to add a new feedback item.
 * @property {function} editFeedback - A function to set the item to be updated.
 * @property {function} updateFeedback - A function to update a feedback item.
 */

/**
 * @type {import('react').Context<FeedbackContextValue>}
 */
const FeedbackContext = createContext();

/**
 * @typedef {Object} FeedbackProviderProps
 * @property {React.ReactNode} children - The child components to render.
 */

/**
 * The provider component for the feedback context.
 *
 * @component
 * @param {FeedbackProviderProps} props - The props for the component.
 * @return {JSX.Element} The provider component.
 */
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  /**
   * Fetches feedback data from the server.
   *
   * @function
   * @name fetchFeedback
   * @returns {void}
   */
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  /**
   * A function to delete a feedback item.
   *
   * @function
   * @name deleteFeedback
   * @param {string} id - The id of the feedback item to delete.
   * @return {void}
   */
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  /**
   * A function to add a new feedback item.
   *
   * @function
   * @name addFeedback
   * @param {FeedbackItem} newFeedback - The new feedback item to add.
   * @return {void}
   */
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

    /**
     * A function to set the item to be updated.
     *
     * @function
     * @name editFeedback
     * @param {FeedbackItem} item - The feedback item to update.
     * @returns {void}
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
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updItem),
        })

        const data = await response.json()

        //no need to spread data and item
        setFeedback(feedback.map((item) => (item.id === id ? data : item)))

        setFeedbackEdit({
        item: {},
        edit: false,
        })
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
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
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