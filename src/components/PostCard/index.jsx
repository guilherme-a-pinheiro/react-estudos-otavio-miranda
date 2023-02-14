import P from 'prop-stypes';
import './styles.css';

export const PostCard = ({ title, body, id, cover }) => {
  // props são passadas no app principal e estou fazendo o desestructuring
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>
          {title} {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};