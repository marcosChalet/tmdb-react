import MovieCard from "../MovieCard"

import "./index.css"

const HomeTitle = _ => {
  return (
    <h2 className="title">
      Melhores Filmes
    </h2>
  )
}

const SearchTitle = ({query}) => {
  return (
    <h2 className="title">
      Resultado para: <span className="query-text">{query}</span>
    </h2>
  )
}

const Main = ({ movies, query }) => {
  return (
    <main className="container">
      { query === "Home" ?
        <HomeTitle /> : <SearchTitle query={query} />
      }
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </main>
  )
}

export default Main