import "./DeleteModal.css";
import "./Modal.css";
import { deleteMovie } from "../data/movies";

function DeleteModal({ closeDeleteModal, movieToEditId, removeMovie }) {
  const handleDeleteMovie = (movieToEditId) => {
    deleteMovie(movieToEditId);
    removeMovie(movieToEditId);
    closeDeleteModal();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <h3>¿Está seguro que desea eliminar la película?</h3>
        <div className="btn-container">
          <button
            className="confirm-btn"
            onClick={() => handleDeleteMovie(movieToEditId)}
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
