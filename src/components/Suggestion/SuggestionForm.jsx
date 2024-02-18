import Editor from '../Editor/Editor';
import * as request from '../../apis/suggestion';
import { useNavigate } from 'react-router-dom';

const SuggestionForm = ({ isTrue, id, data }) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;
    const restaurant_id = id;
    const suggestion_id = data.id;
    if (!isTrue) {
      request.createSuggestion(restaurant_id, { title, content });
    } else {
      request.editSuggestion(suggestion_id, { title, content });
    }

    navigate('/suggestion');
  };
  return (
    <>
      <Editor data={data} onSubmit={onSubmit} />
    </>
  );
};

export default SuggestionForm;
