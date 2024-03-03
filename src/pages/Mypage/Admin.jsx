import { useContext, useEffect } from 'react';
import { LoginContext } from '../../contexts/LoginContextProvider';
import { useNavigate } from 'react-router-dom';
import * as Swal from '../../apis/alert';
const Admin = () => {
  const { isLogin, userInfo, userRole } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin || !userInfo) {
      Swal.alert(
        '로그인 후 이용해주세요.',
        '로그인 페이지로 이동합니다.',
        'warning',
        () => {
          navigate('/login');
        }
      );
    }
    if (!userRole.isAdmin) {
      Swal.alert(
        '관리자만 이용 가능합니다.',
        '홈으로 이동합니다.',
        'warning',
        () => {
          navigate('/');
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  return (
    <>
      {isLogin && userRole.isAdmin && (
        <div className="container">
          <h1>Admin</h1>
        </div>
      )}
    </>
  );
};

export default Admin;
