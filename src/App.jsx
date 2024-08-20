import "./App.css";
import data from "./assets/data.json";
import netflixlogo from "../public/logo-a79c3484.png";
import MovieList from "./assets/components/MovieList";

function App() {
  return (
    <>
      <header>
        <img src={netflixlogo} alt="netflixlogo" />
      </header>
      <section>
        {data.map((elem, index) => (
          <MovieList key={index} name={elem.category} images={elem.images} />
        ))}
      </section>
    </>
  );
}

export default App;
