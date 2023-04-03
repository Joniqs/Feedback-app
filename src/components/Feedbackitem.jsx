import { useState } from 'react'

function Feedbackitem() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a feedback item')
    const handleClick = () => {
        setRating((prev) => {
            return prev + 1
        })
    }
  return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-display'>{text}</div>
        <button onClick={handleClick}>Feedback</button>
    </div>
  )
}

export default Feedbackitem