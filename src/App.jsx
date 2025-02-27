import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './Components/MovieCard'
const movies = [
  {
    id:"1",
    title: "Inception",
    release_date: "2010-07-16",
    url: "https://via.placeholder.com/300x450?text=Inception",
  },
  {
    id:"2",
    title: "Interstellar",
    release_date: "2014-11-07",
    url: "https://via.placeholder.com/300x450?text=Interstellar",
  },
  {
    id:"2",
    title: "The Dark Knight",
    release_date: "2008-07-18",
    url: "https://via.placeholder.com/300x450?text=The+Dark+Knight",
  },
];

function App() {

 return (
    <>
     {movies.map((movie,index)=>(<MovieCard  key={index} movie={movie}/>))}
    </>
  
  )
}


export default App
