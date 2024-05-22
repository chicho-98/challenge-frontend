import "./ActorsTable.css";
import "./MoviesTable.css";
import "./DeleteModal.css";

function ActorsTable({ actors, handleRemoveActor, deleteText }) {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>birthdate</th>
            <th>Actions</th>
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
                      className="remove-btn"
                      onClick={() => handleRemoveActor(actor.id)}
                    >
                      {deleteText}
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
