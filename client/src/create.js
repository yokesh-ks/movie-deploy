import React, { useState } from "react";
import axios from "axios";

function Create(){
    const [movie, setMovie] = useState(
        {
          title: '',
          genre: '',
          year: ''
        }
    )

      function handleChange(e) {
        const {name, value} = e.target;
        setMovie(prevInput => {
          return(
            {
              ...prevInput,
              [name]: value
            }
          )
        })
      }
    
      async function addMovie(e) {
          
        e.preventDefault();
        
        try{
            const newMovie = {
            title: movie.title,
            genre: movie.genre,
            year: movie.year
            }
            console.log(newMovie);
            await axios.post('/newmovie', newMovie);
            alert("movie added")
        } catch(error){
            console.log(error);
        }
        
      }


    return(
        <div className="create">
            <h1>Add Movie</h1>
            <form>
                <input onChange={handleChange} name="title" value={movie.title}></input>
                <input onChange={handleChange} name="genre" value={movie.genre}></input>
                <input onChange={handleChange} name="year" value={movie.year}></input>
                <button onClick={addMovie}>ADD MOVIE</button>
            </form>
        </div>
    )
}

export default Create;