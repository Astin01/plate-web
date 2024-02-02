import { Nav } from 'react-bootstrap';

export default function OnLogin({ navigate, logout, userInfo }) {
  return (
    <Nav className="ms-auto">
      <Nav.Link onClick={() => navigate('/mypage')}>
        {userInfo.nickname}
      </Nav.Link>
      <Nav.Link
        onClick={() => {
          logout();
        }}
      >
        로그아웃
      </Nav.Link>
      <Nav.Link onClick={() => navigate('/admin')}>관리자</Nav.Link>
    </Nav>
  );
}
