import "./ActorsTable.css";
import "./MoviesTable.css";
import "./DeleteModal.css";

function ActorsTable({ actors, handleRemoveActor }) {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>birthdate</th>
          </tr>
        </thead>
        <tbody>
          {actors.map(function (actor) {
            return (
              <tr key={actor.id}>
                <td>{actor.id}</td>
                <td>{actor.firstName}</td>
                <td>{actor.lastName}</td>
                <td>{actor.birthdate}</td>
                <td className="actions">
                  <span>
                    <button
                      onClick={() => handleRemoveActor(actor.id)}
                      className="confirm-btn"
                    >
                      remove
                    </button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ActorsTable;
