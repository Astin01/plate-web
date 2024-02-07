import Editor from '../Editor/Editor';
import * as request from '../../apis/discussion';
import { useNavigate } from 'react-router-dom';

const DiscussionForm = ({ data }) => {
  const navigate = useNavigate();
  console.log(data);
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;

    if (data.length === 0) {
      request.createDiscussion({ title, content });
    } else {
      request.updateDiscussion(data.id, { title, content });
    }

    navigate('/discussion');
  };
  return (
    <>
      <Editor data={data} onSubmit={onSubmit} />
    </>
  );
};

export default DiscussionForm;
