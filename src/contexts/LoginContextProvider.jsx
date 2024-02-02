import React, { createContext, useEffect, useState } from 'react';
import api from '../apis/api';
import Cookies from 'js-cookie';
import * as auth from '../apis/auth';
import { useNavigate } from 'react-router-dom';
import * as Swal from '../apis/alert';
/**
 * 로그인
 * ✔ 로그인 체크
 * ✔ 로그인
 * ✔ 로그아웃
 */
export const LoginContext = createContext();
LoginContext.displayName = 'LoginContext';

const LoginContextProvider = ({ children }) => {
  /**
   * 상태
   * - 로그인 여부
   * - 유저 정보
   * - 권한 정보
   * - 아이디 저장
   */

  // 로그인 여부
  const [isLogin, setIsLogin] = useState(false);

  // 유저 정보
  const [userInfo, setUserInfo] = useState({});

  // 권한 정보
  const [userRole, setUserRole] = useState({ isUser: false, isAdmin: false });

  // 아이디 저장
  const [saveId, setSaveId] = useState();

  // 페이지 이동
  const navigate = useNavigate();
  /*
   로그인 체크 
   - 쿠키에 jwt가 있는 지 확인
   - jwt로 사용자 정보 요청
  */
  const loginCheck = async () => {
    // 쿠키에서 jwt 토큰 가져오기
    const accessToken = Cookies.get('accessToken');
    console.log('accessToken : ' + accessToken);

    // accessToken (jwt)이 없음
    if (!accessToken) {
      console.log('쿠키에 accessToken 없음');
      logoutSetting();
      return;
    }
    // accessToken (jwt)이 있음
    // header에 jwt 토큰 담기
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // 사용자 정보 요청
    let response;
    let data;

    try {
      response = await auth.getUserInfo();
    } catch (error) {
      console.log(`error : ${error}`);
      console.log(`status : ${error.response.status}`);
      return;
    }

    data = response.data;
    console.log('data : ' + data);

    // 인증 실패
    if (data === 'UNAUTHORIZED' || response.status === 401) {
      console.log('aceess Token으로 사용자 인증정보 요청 실패');
      return;
    }

    //인증 성공
    console.log('aceess Token으로 사용자 인증정보 요청 성공');

    //로그인 세팅
    loginSetting(data, accessToken);
  };

  // 로그인
  const login = async (userId, password) => {
    console.log('userId : ' + userId);
    console.log('password : ' + password);

    try {
      const response = await auth.login(userId, password);
      const data = response.data;
      const status = response.status;
      const headers = response.headers;
      const authorization = headers.authorization;
      const accessToken = authorization.replace('Bearer ', ''); // jwt

      console.log('data : ' + data);
      console.log('status : ' + status);
      console.log('headers : ' + headers);
      console.log('jwt : ' + accessToken);

      if (status === 200) {
        // 쿠키에 accessToken(jwt) 저장
        Cookies.set('accessToken', accessToken, { expires: 7 });

        //로그인 체크 (/users/{userId} <-- userData)
        loginCheck();

        Swal.alert('로그인 성공', '메인화면으로 이동합니다', 'success', () => {
          navigate('/');
        });

        // // 메인 페이지로 이동
        // navigate('/');
      }
    } catch (error) {
      Swal.alert('로그인 실패', '아이디 또는 비밀번호를 확인해주세요', 'error');
    }
  };

  // 로그인 세팅
  // userData, accessToken(jwt)
  const loginSetting = (userData, accessToken) => {
    const { id, userId, name, nickname, email, userRoles } = userData;
    const roleList = userRoles.userRole.map((role) => role.role);

    // axios 객체의 header(Authorization : `Bearer ${accessToken}`)
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // 로그인 여부 : true
    setIsLogin(true);
    // 유저정보 세팅
    const updatedUserInfo = { id, userId, name, nickname, email, roleList };
    setUserInfo(updatedUserInfo);

    // 권한정보 세팅
    const updatedUserRole = { isUser: false, isAdmin: false };
    roleList.forEach((role) => {
      if (role === 'USER') updatedUserRole.isUser = true;
      if (role === 'ADMIN') updatedUserRole.isAdmin = true;
    });
    setUserRole(updatedUserRole);
  };

  // 로그아웃
  const logout = (force = false) => {
    if (force) {
      // 로그아웃 세팅
      logoutSetting();
      // 메인페이지로 이동
      navigate('/');
      return;
    }
    Swal.confirm(
      '로그아웃 하시겠습니까?',
      '로그아웃을 진행합니다',
      'warning',
      (result) => {
        if (result.isConfirmed) {
          // 로그아웃 세팅
          logoutSetting();

          // 메인 페이지로 이동
          navigate('/');
        }
      }
    );
  };

  // 로그아웃 세팅
  const logoutSetting = () => {
    // axios 객체의 header(Authorization : null) 초기화
    api.defaults.headers.common.Authorization = null;

    // 쿠키에 저장된 accessToken 삭제
    Cookies.remove('accessToken');

    // 로그인 여부 : false
    setIsLogin(false);

    // 유저정보 초기화
    setUserInfo({});

    // 권한정보 초기화
    setUserRole({ isUser: false, isAdmin: false });
  };

  useEffect(() => {
    // 로그인 체크
    loginCheck();
  }, []);

  return (
    <LoginContext.Provider
      value={{ userInfo, userRole, isLogin, login, logout }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
