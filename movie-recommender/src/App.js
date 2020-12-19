import React, {useState} from "react";
import './App.css';

const MoviesDB = {
  romance : [{ name:"The Notebook", rating: 8, description: "Love story"}, { name:"The Notebook", rating: 8, description: "Love story"}],
  comedy :  [{ name:"The Notebook", rating: 8, description: "Love story"}, { name:"The Notebook", rating: 8, description: "Love story"}]
}
export default function App() {
  const [selected,setSelected] = useState("romance");



  function clickHandler(item){
    setSelected(item);
  }

  return (
    <div >
      <header>
        <p>
          Movie -Recommender
        </p>
      </header>
      <div>
        <h2>Genres</h2>
        <ul>
          {
          Object.keys(MoviesDB).map((item) => {
            return (
            <li onClick={() => clickHandler(item)} key={item}>{item}</li>
            )
          })
          }
        </ul>
        <div>
          {MoviesDB[selected].map((movie) => (
            <div>
              {movie.name} <small>{movie.rating}</small>
              <p>
                {movie.description}
              </p>
            </div>
          )
          )}
        </div>
      </div>
      <footer>

      </footer>
    </div>
  );
}

