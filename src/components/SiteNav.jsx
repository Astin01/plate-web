import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Nav.module.css';
import OffLogin from './OffLogin.jsx';
import OnLogin from './OnLogin.jsx';
import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContextProvider.jsx';

export default function SiteNav() {
  const navigate = useNavigate();
  const { isLogin, logout, userInfo } = useContext(LoginContext);

  return (
    <Navbar sticky="top" className={styles.nav} bg="dark" data-bs-theme="dark">
      <Container className={`${styles.nav}`}>
        <Navbar.Brand href="/">
          <span className="logoTitle">ZeroPlate</span>
        </Navbar.Brand>
        {isLogin ? (
          <OnLogin userInfo={userInfo} logout={logout} navigate={navigate} />
        ) : (
          <OffLogin navigate={navigate} />
        )}
      </Container>
    </Navbar>
  );
}
