import {React,useState,useEffect} from 'react'
import "./Home.css"
import { API_KEY } from '../../assets/API_URL';
import Navbar from '../../Components/Navbar/Navbar'
import heroimg from  '../../assets/venom.jpg'
import title from '../../assets/venom-title.png'
import { FaPlay,FaInfoCircle } from "react-icons/fa";
import TitleCard from '../../Components/TitleCard/TitleCard'
import Footer from '../../Components/Footer/Footer';


const Home = () => {
  const [marvelMovies, setMarvelMovies] = useState([]);
  const [batmanMovies, setBatmanMovies] = useState([]);
  const [supermanMovies, setSupermanMovies] = useState([]);
  const [avengersMovies, setAvengersMovies] = useState([]);
  const [disneyMovies, setDisneyMovies] = useState([]);

  const fetchMovies = async (query, setMovies) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.error(`Error fetching ${query} movies:`, error);
    }
  };

  useEffect(() => {
    fetchMovies('marvel', setMarvelMovies);
    fetchMovies('batman', setBatmanMovies);
    fetchMovies('superman', setSupermanMovies);
    fetchMovies('avengers', setAvengersMovies);
    fetchMovies('disney', setDisneyMovies);
  }, []);

  return (
    <div>
      
      <div className="home">
        <Navbar/>
        <div className='hero'>
          <img src={heroimg} alt="" className="banner-img" />
          <div className="hear-caption">
              <div>
                <img src={title} alt="" className='caption-img' />
                <h2 class="title-title" data-uia="title-info-title">Venom: The Last Dance</h2>
                <p className="info">2024 | <span>U/A 16+ </span>| 1h 48m | Action</p>
                <p>Still on the run, journalist Eddie Brock and his alien companion Venom dodge threats from a vigilant military leader and ruthless invading symbiotes.</p>
                <p><span className="info">Starring:</span> Tom Hardy, Juno Temple, Chiwetel Ejiofor</p>
                <div className="d-flex gap-4 d-inline-flex">
                <button className="btn btn-light px-5">
                <FaPlay style={{ fill: "black" }} /> Play
                </button>
                <button className="btn btn-secondary cl px-5">
                  <FaInfoCircle /> Info
                </button>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div>
      <TitleCard title="Popular on Netflix" movies={marvelMovies} />
      </div>
      
      <TitleCard title="Batman Collection" movies={batmanMovies} />
      <TitleCard title="Superman Collection" movies={supermanMovies} />
      <TitleCard title="Avengers Movies" movies={avengersMovies} />
      <TitleCard title="Disney Classics" movies={disneyMovies} />
      <Footer />
    </div>
  )
}

export default Home
