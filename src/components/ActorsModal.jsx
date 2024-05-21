import { useEffect, useState } from "react";
import "./ActorsModal.css";
import "./Modal.css";
import "./AddButton.css";
import ActorsTable from "./ActorsTable";
import SelectActors from "./SelectActors";
import {
  getMovieActors,
  getActors,
  addActorToMovie,
  removeActorFromMovie,
} from "../data/movies";

function ActorsModal({ closeActorsModal, movieToEditId, movie }) {
  const [movieActors, setMovieActors] = useState([
    { id: 0, firstName: "Pepe", lastName: "Ramos", birthdate: "1970-12-01" },
  ]);
  const [actors, setActors] = useState([
    { id: 0, firstName: "Pepe", lastName: "Ramos", birthdate: "1970-12-01" },
  ]);
  const [actorToAddId, setActorToAddId] = useState(null);

  useEffect(() => {
    getMovieActors(movieToEditId, updateMovieActors);
    getActors(updateActors);
  }, []);

  const updateMovieActors = (movieActors) => {
    setMovieActors(movieActors);
  };

  const updateActors = (actors) => {
    setActors(actors);
  };

  const handleActorToAddId = (id) => {
    setActorToAddId(id);
  };

  const removeActor = (actorId) => {
    const filteredActors = movieActors.filter(function (actor) {
      return actor.id !== actorId;
    });
    setMovieActors(filteredActors);
  };

  const handleRemoveActor = (actorId) => {
    removeActorFromMovie(movieToEditId, actorId, removeActor);
  };

  const isActorInMovie = (actorId, movieActors) => {
    if (movieActors.find((actor) => actor.id === actorId)) return true;
    return false;
  };

  const handleAddActorToMovie = (actor) => {
    setMovieActors([...movieActors, actor]);
  };

  const addActor = (id) => {
    const actorId = Number.parseInt(id);
    if (actorId === 0 || isNaN(actorId)) {
      console.log("select an actor");
      return;
    }
    if (isActorInMovie(actorId, movieActors)) {
      console.log("actor already in movie");
      return;
    }
    const actor = actors.find((actor) => actor.id === actorId);
    addActorToMovie(movieToEditId, actorId, handleAddActorToMovie, actor);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="cancel-btn-container">
          <button className="cancel-btn" onClick={closeActorsModal}>
            x
          </button>
        </div>
        <h3>{movie.title}</h3>
        <SelectActors actors={actors} handleActorToAddId={handleActorToAddId} />
        <button onClick={() => addActor(actorToAddId)}>Add actor</button>
        <ActorsTable
          actors={movieActors}
          handleRemoveActor={handleRemoveActor}
        />
      </div>
    </div>
  );
}

export default ActorsModal;
