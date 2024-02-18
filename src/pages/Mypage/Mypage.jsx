import React, { useContext, useEffect, useState } from 'react';
import * as auth from '../../apis/auth';
import MypageForm from '../../components/Mypage/MypageForm';
import { LoginContext } from '../../contexts/LoginContextProvider';
import { useNavigate } from 'react-router-dom';
import * as Swal from '../../apis/alert';

export default function Mypage() {
  const [userInfo, setUserInfo] = useState({});
  const { isLogin, userRole, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  //회원 정보 조회
  const getUserInfo = async () => {
    // 비로그인 혹은 USER 권한이 없을 경우 로그인 페이지로 이동
    if (!isLogin || !userRole.isUser) {
      alert('로그인 후 이용해주세요.');
      navigate('/login');
      return;
    }
    const response = await auth.getUserInfo();
    const data = response.data;

    setUserInfo(data);
  };

  //회원 정보 수정
  const updateUser = async (form) => {
    let response;

    try {
      response = await auth.update(form);
    } catch (error) {
    }

    const status = response.status;

    if (status === 200) {
      Swal.alert(
        '회원정보 수정 성공',
        '로그아웃 후, 다시 로그인해주세요.',
        'success',
        () => {
          logout();
        }
      );
    } else {
      Swal.alert('회원정보 수정 실패', '양식에 맞게 입력해주세요.', 'error');
    }
  };
  // 회원 탈퇴
  const deleteUser = async (userId) => {
    let response;

    try {
      response = await auth.deleteAccount(userId);
    } catch (error) {
      return;
    }
    const status = response.status;

    if (status === 200) {
      Swal.alert('회원탈퇴 성공', '그동안 감사했습니다.', 'success', () => {
        logout(true);
      });
    } else {
      Swal.alert('회원탈퇴 실패', '고객센터에 문의해주세요', 'error');
    }
  };

  useEffect(() => {
    if (!isLogin) {
      return;
    }
    getUserInfo();
  }, [isLogin]);

  return (
    <>
      {isLogin && (
        <MypageForm
          userInfo={userInfo}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      )}
    </>
  );
}
