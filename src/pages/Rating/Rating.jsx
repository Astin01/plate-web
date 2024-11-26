import React, { useState, useContext } from 'react';
import RatingStep from '../../components/Rating/RatingStep';
import { RatingContext } from '../../contexts/RatingContextProvider';
import styles from '../../css/Rating/Rating.module.css'
import * as request from '../../apis/rating';
import { LoginContext } from '../../contexts/LoginContextProvider';
import { useNavigate } from 'react-router-dom';
import * as Swal from '../../apis/alert';

export default function Rating() {
  const { ratings,updateRating } = useContext(RatingContext);
  const [currentStep, setCurrentStep] = useState(0);
  const {userInfo, loginCheck } = useContext(LoginContext);
  const navigate = useNavigate();

  const categoriesTitle = ["맛", "가격", "서비스", "음식의 질","음식의 양", "재료의 신선도","인테리어","모임하기 좋은 장소","특별한 메뉴가 있는 지", "매장의 청결도"];
  const categories = ["taste", "price", "service", "quality","quantity", "fresh","interior","group","special", "clean"];
  
  const handleNext = () => {
    if (currentStep < categories.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    Swal.alert('선호도가 제출되었습니다', '홈화면으로 이동합니다', 'success', () => {
      navigate('/');
    });
    if(userInfo.userStatus === 'PENDING'){
      request.saveUserPreference(ratings);
    }
    else if(userInfo.userStatus === 'ACTIVATE'){
      request.updateUserPreference(ratings);
    }
    setTimeout(() => {
     loginCheck();
    }, 3000); 
  };

  return (
  <div className={`container ${styles.wrapContent}`}>
    <div className={`row justify-content-center`}>
    <RatingStep
          category={categories[currentStep]}
          categoryTitle={categoriesTitle[currentStep]}
          onNext={handleNext}
          updateRating={updateRating}
          ratings={ratings}
          categories={categories} 
        />
    </div>
    <div></div>
  </div>

  );
}
