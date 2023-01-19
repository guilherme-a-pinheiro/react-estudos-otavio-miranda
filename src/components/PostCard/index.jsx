export const PostCard = ({ title, body, id, cover }) => {
  // props são passadas no app principal e estou fazendo o desestructuring
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  )
}