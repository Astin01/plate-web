import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SiteNav from './components/Nav/SiteNav';

import styles from './css/App/App.module.css';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import SignIn from './pages/Auth/SignIn';
import React, { Suspense, useState } from 'react';
import Notice from './pages/Notice/Notice';
import Mypage from './pages/Mypage/Mypage';
import Admin from './pages/Mypage/Admin';
import ContentNav from './components/Nav/ContentNav';

function App() {
  const [isLogin, setIsLogin] = useState(0);
  const Category = React.lazy(() => import('./components/Main/Category'));
  const Restaurant = React.lazy(() => import('./pages/Restaurant/Restaurant'));
  const RestaurantDetail = React.lazy(() =>
    import('./pages/Restaurant/RestaurantDetail')
  );
  const Discussion = React.lazy(() => import('./pages/Discussion/Discussion'));
  const DiscussionDetail = React.lazy(() =>
    import('./pages/Discussion/DiscussionDetail')
  );
  const DiscussionForm = React.lazy(() =>
    import('./pages/Discussion/DiscussionForm')
  );

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
              <Route path="/event/:id" element={<Notice />} />
              <Route path="/category/:category" element={<Category />} />
              <Route
                path="/category/:category/restaurant"
                element={<Restaurant />}
              />
              <Route
                path="/category/:category/restaurant/:name"
                element={<RestaurantDetail />}
              />
              <Route path="/discussion" element={<Discussion />} />
              <Route
                path="/discussion/new"
                element={<DiscussionForm isTrue={false} />}
              />
              <Route
                path="/discussion/edit/:id"
                element={<DiscussionForm isTrue={true} />}
              />
              <Route path="/discussion/:id" element={<DiscussionDetail />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Suspense>
          <ContentNav isLogin={isLogin} />
        </div>
      </div>
    </>
  );
}

export default App;
