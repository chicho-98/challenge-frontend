import "./DeleteModal.css";
import "./Modal.css";
import { deleteMovie } from "../data/movies";

function DeleteModal({ closeDeleteModal, movieToEditId, removeMovie }) {
  const handleDeleteMovie = (movieToEditId, removeMovie) => {
    deleteMovie(movieToEditId, removeMovie);
    closeDeleteModal();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <h3>¿Está seguro que desea eliminar la película?</h3>
        <div className="btn-container">
          <button
            className="delete-btn"
            onClick={() => handleDeleteMovie(movieToEditId, removeMovie)}
          >
            delete
          </button>
          <button className="cancel-btn" onClick={closeDeleteModal}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
