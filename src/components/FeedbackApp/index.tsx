import {useState, JSX} from 'react'
import RatingItem from '../RatingItem'
import './index.css'

const FeedbackApp = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const onSelectRating = (rating: number): void => {
    setSelectedRating(rating)
  }

  const onSubmitFeedback = (): void => {
    if (selectedRating !== null) {
      setIsSubmitted(prev => !prev)
    }
  }

  const renderRatingView = (): JSX.Element => {
    return (
      <>
        <h1 className="heading">Rate Our Service</h1>
        <div className="ratings-container">
          {[1, 2, 3, 4, 5].map(rating => (
            <RatingItem
              key={rating}
              rating={rating}
              isSelected={selectedRating === rating}
              onSelectRating={onSelectRating}
            />
          ))}
        </div>
        <button
          className="submit-button"
          onClick={onSubmitFeedback}
          disabled={selectedRating === null}
        >
          Submit
        </button>
      </>
    )
  }

  const renderThankYouView = (): JSX.Element => {
    return (
      <>
        <h1 className="heading">Thank You!</h1>
        <p className="message">You selected {selectedRating} out of 5</p>
      </>
    )
  }

  return (
    <div className="app-container">
      <div className="card">
        {isSubmitted ? renderThankYouView() : renderRatingView()}
      </div>
    </div>
  )
}

export default FeedbackApp
