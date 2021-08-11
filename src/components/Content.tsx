import { MovieCard } from "./MovieCard";
import '../styles/content.scss';

interface ContentProps { //Propriedade dos titulos de genero.
  selectedGenre: {
    title: string; //tipagem do titulo.
  },
  movies: Array<{ // A lista completa dos filmes e suas tipagens.
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>
}

export function Content({ selectedGenre, movies }: ContentProps) { // pega a propriedade no interface.
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}