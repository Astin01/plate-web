import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Nav.module.css';

export default function SiteNav({ isLogin }) {
  const navigate = useNavigate();

  return (
    <Navbar sticky="top" className={styles.nav} bg="dark" data-bs-theme="dark">
      <Container className={`${styles.nav}`}>
        <Navbar.Brand href="/">
          <span className="logoTitle">ZeroPlate</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link onClick={() => navigate('/checkout')}>로그인</Nav.Link>
        </Nav>
        {/* {isLogin === 0 ? (
          <OffLogin navigate={navigate} />
        ) : (
          <OnLogin user={userInfo} navigate={navigate} />
        )} */}
      </Container>
    </Navbar>
  );
}
