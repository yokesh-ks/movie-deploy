import axios from "axios";
import React, {useState, useEffect} from "react";

function Display() {
  const [movies, setMovies] = useState([
    {
      title: '',
      genre: '',
      year: ''
    }
])

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      mode: 'no-cors',
      redirect: 'follow'
    };
    
    fetch("/movies", requestOptions)
      .then(response => response.text())
      .then(result => setMovies(result))
      .catch(error => console.log('error', error));
  })

  async function deleteMovie(id){
      await axios.delete('/delete/' + id);
      alert("movie deleted");
  }

  return (
    <div className="App">
      {movies.map(movie => {
        return (
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.genre}</p>
            <p>{movie.year}</p>
            <button onClick={()=>deleteMovie(movie._id)}>DELETE</button>
          </div>
        ) 
      })}
    </div>
  );
}

export default Display;
