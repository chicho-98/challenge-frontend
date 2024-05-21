export function getActors(updateActors) {
  fetch("http://localhost:8080/api/actors")
    .then((response) => response.json())
    .then((actors) => updateActors(actors))
    .catch((error) => console.log(error));
}

export function createActor(actor) {
  fetch("http://localhost:8080/api/actors", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(actor),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export function deleteActor(actorId, removeActor) {
  fetch(`http://localhost:8080/api/actors/${actorId}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json)
    .then(() => removeActor(actorId))
    .catch((error) => console.log(error));
}
