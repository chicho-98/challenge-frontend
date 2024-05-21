export function getActors(updateActors) {
  fetch("http://localhost:8080/api/actors")
    .then((response) => response.json())
    .then((actors) => updateActors(actors))
    .catch((error) => console.log(error));
}
