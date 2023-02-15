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

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired
}