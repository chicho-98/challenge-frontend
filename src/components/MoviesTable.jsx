import "./MoviesTable.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

function MoviesTable({ movies, handleMovieToDeleteId, handleMovieToEditId }) {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(function (movie) {
            return (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td className="actions">
                  <span>
                    <BsFillTrashFill
                      onClick={() => handleMovieToDeleteId(movie.id)}
                    />
                  </span>
                  <span>
                    <BsFillPencilFill
                      onClick={() => handleMovieToEditId(movie.id)}
                    />
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

export default MoviesTable;
