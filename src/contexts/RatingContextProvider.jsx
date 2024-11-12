import React, { createContext, useState } from 'react';

const RatingContext = createContext();

const RatingProvider = ({ children }) => {
  //유저 선호 정보 
  const [ratings, setRatings] = useState({
    taste: '',
    price: '',
    service: '',
    quality: '',
    quantity:'',
    fresh: '',
    interior:'',
    group:'',
    special:'',
    clean:'',
  });


  const updateRating = (category, value) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [category]: value
    }));
  };

  return (
    <RatingContext.Provider value={{ ratings, updateRating }}>
      {children}
    </RatingContext.Provider>
  );
};

export { RatingContext, RatingProvider };
