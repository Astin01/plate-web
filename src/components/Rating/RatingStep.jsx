import React from 'react';
import styles from '../../css/Rating/RatingStep.module.css'
import { Button } from 'react-bootstrap';
export default function RatingStep({ category, categoryTitle, onNext, updateRating, ratings, categories}) {

  const options = ["매우 중요함", "중요함", "보통임", "덜 중요함", "안 중요함"];
  const optionValue = ["highest","high","medium","low","lowest"];

  const isSelected = ratings[category] !== undefined;

  return (
    <div className={`${styles.rating_step_container}`}>
    <div className={`${styles.question}`}>음식점 선택 시 중요하게 생각하는 요소를 평가해주세요</div>
    <h3>{categoryTitle}</h3>
    <div className={`${styles.rating-options}`}>
      {options.map((option,index) => (
        <label className={`${styles.rating_input}`}key={option}>
          <input
            type="radio"
            name={category}
            value={option}
            checked={ratings[category] === optionValue[index]}
            onChange={() => updateRating(category, optionValue[index])}
          />
          {option}
        </label>
      ))}
    </div>
    <Button onClick={onNext} disabled={!isSelected}> 
        {isSelected ? (category === categories[categories.length - 1] ? "제출" : "다음") : "선택 해주세요"}
      </Button>
  </div>
  );
}

