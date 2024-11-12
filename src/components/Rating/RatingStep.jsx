import React, { useContext } from 'react';
import { RatingContext } from '../../contexts/RatingContextProvider';
import styles from '../../css/Rating/RatingStep.module.css'
import { Button } from 'react-bootstrap';
export default function RatingStep({ category, onNext }) {
  const { ratings, updateRating } = useContext(RatingContext);

  const options = ["매우 중요함", "중요함", "보통임", "덜 중요함", "안 중요함"];

  const isSelected = ratings[category] !== undefined;

  return (
    <div className={`${styles.rating_step_container}`}>
    <div className={`${styles.question}`}>음식점 선택 시 중요하게 생각하는 요소를 평가해주세요</div>
    <h3>{category}</h3>
    <div className={`${styles.rating-options}`}>
      {options.map(option => (
        <label className={`${styles.rating_input}`}key={option}>
          <input
            type="radio"
            name={category}
            value={option}
            checked={ratings[category] === option}
            onChange={() => updateRating(category, option)}
          />
          {option}
        </label>
      ))}
    </div>
    <Button onClick={onNext}  disabled={!isSelected}>다음</Button>
  </div>
  );
}

