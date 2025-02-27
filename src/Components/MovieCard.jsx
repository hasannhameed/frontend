

const MovieCard = ({movie}) =>{
    return(
        <div className="movie-card" id={movie.id}>
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button type="button" className="favorite-btn">
                      ❤️
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>
    )
}

export default MovieCard;