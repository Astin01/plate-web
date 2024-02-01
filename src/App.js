import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SiteNav from './components/SiteNav';

import styles from './css/App.module.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import React, { Suspense, useState } from 'react';
import EventDetail from './pages/EventDetail';
import Mypage from './pages/Mypage';
import Admin from './pages/Admin';

function App() {
  const [isLogin, setIsLogin] = useState(0);
  const Category = React.lazy(() => import('./components/Category'));
  const Restaurant = React.lazy(() => import('./pages/Restaurant'));
  const RestaurantDetail = React.lazy(() => import('./pages/RestaurantDetail'));
  return (
    <>
      <div className={`${styles.entireWrap}`}>
        <div className={`${styles.contentWrap}`}>
          <SiteNav isLogin={isLogin} />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
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
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
