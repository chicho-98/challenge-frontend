import "./SelectActors.css";
import "./Modal.css";

function SelectActors({ actors, handleActorToAddId }) {
  const handleChange = (e) => {
    handleActorToAddId(e.target.value);
  };

  return (
    <div>
      <select name="s_actors" id="s_actors" onChange={handleChange}>
        <option value={0}>actors</option>
        {actors.map(function (actor) {
          return (
            <option key={actor.id} value={actor.id}>
              {actor.firstName + " " + actor.lastName}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectActors;
