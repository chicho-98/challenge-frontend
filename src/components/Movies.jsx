import "./Movies.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import MoviesTable from "./MoviesTable";
import Modal from "./Modal";
import DeleteModal from "./DeleteModal";
import AddButton from "./AddButton";
import { getMovies, createMovie, editMovie } from "../data/movies";

function Movies() {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [movieToEditId, setMovieToEditId] = useState(null);
  const [movies, setMovies] = useState([{ id: 0, title: "Movie title" }]);

  useEffect(() => {
    getMovies(updateMovies);
  }, []);

  const updateMovies = (movies) => {
    setMovies(movies);
  };

  const removeMovie = (id) => {
    const filteredMovies = movies.filter(function (movie) {
      return movie.id !== id;
    });
    setMovies(filteredMovies);
    setMovieToEditId(null);
  };

  const handleSubmit = (movie) => {
    console.log(movieToEditId);
    if (movieToEditId === null) {
      createMovie(movie);
    } else {
      editMovie(movieToEditId, movie);
      setMovieToEditId(null);
    }
  };

  const handleMovieToEditId = (id) => {
    setMovieToEditId(id);
    openModal();
  };

  const handleMovieToDeleteId = (id) => {
    setMovieToEditId(id);
    openDeleteModal();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setMovieToEditId(null);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setMovieToEditId(null);
  };

  return (
    <>
      <Header />
      <h1>Hello challenge</h1>
      <div className="button-container">
        <AddButton text="+ Movie" openModal={openModal} />
      </div>
      <MoviesTable
        movies={movies}
        handleMovieToDeleteId={handleMovieToDeleteId}
        handleMovieToEditId={handleMovieToEditId}
      />
      {modalOpen && (
        <Modal
          closeModal={closeModal}
          handleSubmit={handleSubmit}
          defaultValues={
            movieToEditId !== null &&
            movies.find((movie) => movie.id === movieToEditId)
          }
        />
      )}
      {deleteModalOpen && (
        <DeleteModal
          closeDeleteModal={closeDeleteModal}
          movieToEditId={movieToEditId}
          removeMovie={removeMovie}
        />
      )}
    </>
  );
}

export default Movies;
