const MovieList = ({ name, images }) => {
  return (
    <div className="container">
      <h2>{name}</h2>
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
