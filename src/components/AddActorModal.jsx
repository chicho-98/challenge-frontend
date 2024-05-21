import "./AddActorModal.css";
import "./Modal.css";
import { useState } from "react";

function AddActorModal({ closeModal, handleSubmit }) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const formIsValid = () => {
    if (formState.firstName && formState.lastName && formState.birthdate) {
      return true;
    }
    return false;
  };

  const handleSubmitButton = (e) => {
    if (!formIsValid()) return;
    handleSubmit(formState);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="cancel-btn-container">
          <button className="cancel-btn" onClick={closeModal}>
            x
          </button>
        </div>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="firstName"
              value={formState.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              value={formState.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="birthdate"
              placeholder="birthdate"
              value={formState.birthdate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="submit-btn-container">
            <button className="submit-btn" onClick={handleSubmitButton}>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddActorModal;
