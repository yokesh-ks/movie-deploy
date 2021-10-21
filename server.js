const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const port = process.env.PORT || 4000;

const app = express();

app.use[cors()];
app.use(express.static('build'))
app.use(express.json());

// Moongoose
mongoose.connect("mongodb+srv://yokesh:yokesh123@apidev.e8ljl.mongodb.net/moviesDB?retryWrites=true&w=majority")

// data Schema
const movieSchema = {
   title: String,
   genre: String,
   year: String
}

const Movie = mongoose.model("Movie", movieSchema);

// API routes
app.get('/movies', function(req, res){
    Movie.find().then(movies => res.json(movies));
})

//add movie post method
app.post('/newmovie', async function(req, res){
    try{
        const title = req.body.title;
        const genre = req.body.genre;
        const year = req.body.year;

        const newMovie = new Movie({
            title,
            genre,
            year
        });

        await newMovie.save();
        res.json("Movie Added");
    } catch(error){
        console.log(error);
        res.json("Movie failed to add");
        
    }  
})

//app delete
app.delete('/delete/:id', async function(req,res){
    try{
        const id = req.params.id;
        await Movie.findByIdAndDelete({_id: id});
        res.json("movie deleted")
    } catch(error){
        console.log(error);
        res.json("Movie failed to delete");
    }
    
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
    })
}


app.listen(port, function(){
    console.log("express is running");
})