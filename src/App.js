import { useState } from 'react'
import Header from './components/Header'
import Feedbackitem from './components/Feedbackitem'
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
        <Header />
        <div className='container'>
            <Feedbackitem />
        </div>
        </>
    )
}

export default App