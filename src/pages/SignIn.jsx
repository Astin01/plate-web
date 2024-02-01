import SignInForm from '../components/SignIn/SignInForm';
import * as auth from '../apis/auth';
import { useNavigate } from 'react-router-dom';
import * as Swal from '../apis/alert';

export default function SignIn() {
  const navigate = useNavigate();
  // 회원가입 요청
  const signIn = async (form) => {
    let response;
    let data;
    try {
      response = await auth.register(form);
    } catch (error) {
      console.log(`error : ${error}`);
      console.log(`status : ${error.response.status}`);
      console.log('회원가입 요청 실패');
      return;
    }
    data = response.data;
    const status = response.status;
    console.log(`data : ${data}`);
    console.log(`status : ${status}`);

    if (status === 200) {
      Swal.alert(
        '회원가입 성공',
        '로그인 페이지로 이동합니다.',
        'success',
        () => {
          navigate('/login');
        }
      );
    } else {
      Swal.alert('회원가입 실패', '양식에 맞게 입력해주세요.', 'error');
    }
  };
  return (
    <>
      <SignInForm signIn={signIn} />
    </>
  );
}
