import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/Nav/ContentNav.module.css';

const ContentNav = () => {
  const navigate = useNavigate();

  return (
    <Navbar sticky="bottom" bg="light" data-bs-theme="light">
      <Container className={`${styles.container}`}>
        <Nav className={`${styles.nav}`}>
          <Nav.Link onClick={() => navigate('/')}>
            <span class="material-symbols-outlined">home</span>
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/discussion')}>
            <span class="material-symbols-outlined">assignment</span>
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/suggestion')}>
            <span class="material-symbols-outlined">edit_square</span>
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/mypage')}>
            <span class="material-symbols-outlined">person</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default ContentNav;
