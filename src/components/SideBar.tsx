import { Button } from "./Button";
import "../styles/sidebar.scss";
import React from "react";

export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>;
}

export const SideBar: React.FC<SideBarProps> = ({
  genres,
  selectedGenreId,
  setSelectedGenreId,
}) => {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div className="buttons-container">
      {genres.map((genre) => (
        <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  );
};