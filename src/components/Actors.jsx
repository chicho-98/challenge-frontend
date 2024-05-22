import { useEffect, useState } from "react";
import "./Actors.css";
import Header from "./Header";
import ActorsTable from "./ActorsTable";
import AddActorModal from "./AddActorModal";
import AddButton from "./AddButton";
import { getActors, createActor, deleteActor } from "../data/actors";

function Actors() {
  const [actors, setActors] = useState([
    { id: 0, firstName: "Pepe", lastName: "Ramos", birthdate: "1970-12-01" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getActors(updateActors);
  }, []);

  const updateActors = (actors) => {
    setActors(actors);
  };

  const handleAddActor = (actor) => {
    createActor(actor);
  };

  const removeActor = (actorId) => {
    const filteredActors = actors.filter(function (actor) {
      return actor.id !== actorId;
    });
    setActors(filteredActors);
  };

  const handleRemoveActor = (actorId) => {
    deleteActor(actorId, removeActor);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="button-container">
          <h2>Actors</h2>
          <AddButton text="+ Actor" openModal={openModal} />
        </div>
      </div>
      <ActorsTable actors={actors} handleRemoveActor={handleRemoveActor} />
      {modalOpen && (
        <AddActorModal closeModal={closeModal} handleSubmit={handleAddActor} />
      )}
    </>
  );
}

export default Actors;
