import React, { useState, useContext } from 'react';
import RatingStep from '../../components/Rating/RatingStep';
import { RatingContext } from '../../contexts/RatingContextProvider';
import styles from '../../css/Rating/Rating.module.css'

export default function Rating() {
  const { ratings } = useContext(RatingContext);
  const [currentStep, setCurrentStep] = useState(0);

  // 평가 항목 배열
  const categories = ["맛", "가격", "서비스", "음식의 질","음식의 양", "재료의 신선도","인테리어","모임하기 좋은 장소","특별한 메뉴가 있는 지", "매장의 청결도"];

  const handleNext = () => {
    if (currentStep < categories.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  // 서버로 데이터 전송
  const handleSubmit = () => {
    // 여기에 실제 서버 전송 로직 추가
    console.log("사용자 평가 제출:", ratings);
    alert("평가가 제출되었습니다!");
  };

  return (
  <div className={`container ${styles.wrapContent}`}>
    <div className={`row justify-content-center`}>
      <RatingStep
        category={categories[currentStep]}
        onNext={handleNext}
      />
    </div>
    <div></div>
  </div>

  );
}
