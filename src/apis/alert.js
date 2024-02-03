import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);

// 기본 alert
export const alert = (title, text, icon, callback) => {
  mySwal
    .fire({
      title: title,
      text: text,
      icon: icon,
    })
    .then(callback);
};

//confirm
export const confirm = (title, text, icon, callback) => {
  mySwal
    .fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: '아니요',
      confirmButtonColor: '#3085d6',
      confirmButtonText: '네',
    })
    .then(callback);
};
