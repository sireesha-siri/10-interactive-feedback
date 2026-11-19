import {JSX} from 'react'

import './index.css'

interface RatingItemProps {
  rating: number
  isSelected: boolean
  onSelectRating: (rating: number) => void
}

const RatingItem = (props: RatingItemProps): JSX.Element => {
  const {rating, isSelected, onSelectRating} = props

  const onClickSelectRating = (): void => {
    onSelectRating(rating)
  }

  return (
    <button
      type="button"
      className={isSelected ? 'rating-item selected' : 'rating-item'}
      onClick={onClickSelectRating}
    >
      {rating}
    </button>
  )
}

export default RatingItem
