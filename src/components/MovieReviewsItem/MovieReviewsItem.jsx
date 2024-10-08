const MovieReviewsItem = ({ review }) => (
  <div>
    <h3>{review.author}</h3>
    <p>{review.content}</p>
  </div>
);

export default MovieReviewsItem;
