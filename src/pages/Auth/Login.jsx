import LoginForm from '../../components/Login/LoginForm';
import styles from '../../css/Login/Login.module.css';

export default function Login() {
  return (
    <div className={`${styles.loginFormWrap}`}>
      <LoginForm />
      <div></div>
    </div>
  );
}
