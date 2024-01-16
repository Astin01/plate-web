import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SiteNav from './components/SiteNav';

import styles from './css/App.module.css';
import Home from './router/Home';
import Login from './router/Login';
import SignIn from './router/SignIn';
import React, { Suspense, useState } from 'react';
import EventDetail from './router/EventDetail';
import Mypage from './router/Mypage';

function App() {
  const [isLogin, setIsLogin] = useState(0);
  const Category = React.lazy(() => import('./components/Category'));
  const Restaurant = React.lazy(() => import('./router/Restaurant'));
  const RestaurantDetail = React.lazy(() =>
    import('./router/RestaurantDetail')
  );
  return (
    <>
      <div className={`${styles.entireWrap}`}>
        <div className={`${styles.contentWrap}`}>
          <SiteNav isLogin={isLogin} />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={<Login setIsLogin={setIsLogin} />}
              />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/event/:id" element={<EventDetail />} />
              <Route path="/category/:category" element={<Category />} />
              <Route
                path="/category/:category/restaurant"
                element={<Restaurant />}
              />
              <Route
                path="/category/:category/restaurant/:name"
                element={<RestaurantDetail />}
              />
              <Route path="/mypage" element={<Mypage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
