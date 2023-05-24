import { Link } from "react-router-dom";

const Animelist = ({items,title}) =>{
    return(
        <div className="title">
        <h1>{title}</h1>
        <div className="anime-list">
            {
                items.map((anime)=>{return(
                 
                  <Link to={`/animedetails${anime.mal_id}`}>
                <div className="anime">
                    <img src={anime.images.jpg.image_url} alt="anime" className="pic"/>
                    <h2>{anime.title}</h2>
                </div>
                  </Link>
                 
                  )})
            }
        </div>
        </div>
    );
}
export default Animelist;