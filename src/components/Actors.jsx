import { useEffect, useState } from "react";
import "./Actors.css";
import Header from "./Header";
import ActorsTable from "./ActorsTable";
import { getActors } from "../data/actors";

function Actors() {
  const [actors, setActors] = useState([
    { id: 0, firstName: "Pepe", lastName: "Ramos", birthdate: "1970-12-01" },
  ]);

  useEffect(() => {
    getActors(updateActors);
  }, []);

  const updateActors = (actors) => {
    setActors(actors);
  };

  const handleRemoveActor = (id) => {};

  return (
    <>
      <Header />
      <h2>Actors</h2>
      <ActorsTable actors={actors} handleRemoveActor={handleRemoveActor} />
    </>
  );
}

export default Actors;
