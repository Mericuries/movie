// import React from 'react';
import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import  './App.css'
import Pagination from './components/Pagination';
import MovieDetails from './components/MovieDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

 const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
 
 const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
   
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState('1');
  const [moviesPerPage, setMoviesPerPage] = useState(4);
  const [page, setPage] = useState('1');
 



  useEffect(()=>{
    getMovies(FEATURED_API +  page)
    
  }, [page])

  console.log(page)

  useEffect(()=>{
    getMovies(FEATURED_API +  page)
    
  }, [])



  const getMovies = (API) =>{
    fetch(API)
    .then((res) => res.json())
    .then((data)=>{
      console.log(data)
      setMovies(data.results);
    });
     
  }

  const handlePage = (e) =>{
    setPage(e)
    console.log(e);
  }

  const handleOnSubmit = (e) =>{
 
    e.preventDefault();

        if(searchTerm){
        getMovies(SEARCH_API + searchTerm)

        setSearchTerm('');

        console.log(movies);
      }



      
  
  };

  const handleOnchange = (e) =>{
    // console.log(handleOnchange)
    setSearchTerm(e.target.value);
  };

  const indexOfLastPost =  currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost)

  return (
       
          <>
               <header>
            <form onSubmit = {handleOnSubmit}>
            <input 
            className= "search"
            type = "text"
            placeholder = "Search..."
            value ={searchTerm}
            onChange ={handleOnchange}
            />
            </form>
                 </header>
            <div className = "movie-container">
            
                {movies?.map((movie) => 
            <Movie key = {movie.id} {...movie}
              movies = {currentMovies}
              
            />)}
              
          
         
     </div>
          <div>
          
            <Pagination moviesPerPage = {moviesPerPage} total_pages={movies.length}
          handlePage = {handlePage}/>
         </div>
         {/* <Route  exact path  = {"/:id"}> */}
          <Route exact path="/" component={Movie} />
          <Route 
          path = "/movies/:id" render = {() =><Movie movies = {movies}/>}/>
          <MovieDetails movies = {movies}/>

      
        
         
      </>
  
  );
}

export default App;
