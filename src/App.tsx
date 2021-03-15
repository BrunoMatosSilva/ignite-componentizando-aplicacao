import { useEffect, useState } from "react";

import { api } from "./services/api";

import "./styles/global.scss";

import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { GenreResponseProps, MovieProps } from "./interface/interfaces";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <SideBar
          genres={genres}
          selectedGenreId={selectedGenreId}
          setSelectedGenreId={setSelectedGenreId}
        />
      </nav>

      <Content selectedGenre={selectedGenre} movies={movies} />
    </div>
  );
}