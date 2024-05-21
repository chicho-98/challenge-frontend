const movies = [
  {
    id: 1,
    title: "Star Wars Episode I",
  },
  {
    id: 2,
    title: "Back to the future",
  },
  {
    id: 3,
    title: "Movie 54",
  },
];

export function getMovies(updateMovies) {
  fetch("http://localhost:8080/api/movies")
    .then((response) => response.json())
    .then((data) => updateMovies(data))
    .catch((error) => console.log(error));
}

export function createMovie(movie) {
  fetch("http://localhost:8080/api/movies", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(movie),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export function editMovie(id, movie) {
  fetch(`http://localhost:8080/api/movies/${id}`, {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify(movie),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export function deleteMovie(movieId) {
  fetch(`http://localhost:8080/api/movies/${movieId}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => console.log(error));
}

export function getMovieActors(id, updateMovieActors) {
  fetch(`http://localhost:8080/api/movies/${id}`)
    .then((response) => response.json())
    .then((movie) => updateMovieActors(movie.actors))
    .catch((error) => console.log(error));
}

export function getActors(updateActors) {
  fetch("http://localhost:8080/api/actors")
    .then((response) => response.json())
    .then((actors) => updateActors(actors))
    .catch((error) => console.log(error));
}

export function addActorToMovie(
  movieId,
  actorId,
  handleAddActorToMovie,
  actor
) {
  fetch(`http://localhost:8080/api/movies/${movieId}/actors/${actorId}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => handleAddActorToMovie(actor))
    .catch((error) => console.log(error));
}

export function removeActorFromMovie(movieId, actorId, removeActor) {
  fetch(`http://localhost:8080/api/movies/${movieId}/actors/${actorId}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => removeActor(actorId))
    .catch((error) => console.log(error));
}
