const FavButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="add-favorite-btn">
      Agregar a favoritos
    </button>
  );
};

export default FavButton;
