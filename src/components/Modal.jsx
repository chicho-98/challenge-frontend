import "./Modal.css";
import { useState } from "react";
import genres from "../data/genres";

function Modal({ closeModal, handleSubmit, defaultValues }) {
  const [formState, setFormState] = useState(
    defaultValues || { title: "", runtimeMinutes: "", genre: "" }
  );

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const formIsValid = () => {
    if (formState.title && formState.runtimeMinutes && formState.genre) {
      return true;
    }
    return false;
  };

  const handleSubmitButton = (e) => {
    //e.preventDefault();
    if (!formIsValid()) return;
    handleSubmit(formState);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="cancel-btn-container">
          <button className="cancel" onClick={closeModal}>
            x
          </button>
        </div>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formState.title}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="runtimeMinutes"
              placeholder="Runtime (minutes)"
              value={formState.runtimeMinutes}
              onChange={handleChange}
              min="1"
              required
            />
            <select
              name="genre"
              id="genre"
              onChange={handleChange}
              value={formState.genre}
              className="select"
              required
            >
              <option value="">Genres</option>
              {genres.map(function (genre) {
                return (
                  <option key={genre.id} value={genre.name}>
                    {genre.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <button className="submit-btn" onClick={handleSubmitButton}>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
