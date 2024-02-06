import { Nav } from 'react-bootstrap';

export default function OffLogin({ navigate }) {
  return (
    <Nav className="ms-auto">
      <Nav.Link onClick={() => navigate('/login')}>로그인</Nav.Link>
      <Nav.Link onClick={() => navigate('/signin')}>회원가입</Nav.Link>
    </Nav>
  );
}
