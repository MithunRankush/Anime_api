import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Animedetails = () => {
    let{id}=useParams()
    let[items,setItems]=useState(null)
    let[pending,setPending]=useState(true)
    let[error , setError] = useState(null)

useEffect(()=>{
    setTimeout(()=>{
        fetch("https://api.jikan.moe/v4/anime/"+ id)
        
        .then((response)=>{
            if(response.ok==true)
            {
                return response.json()
            }
            else{
                throw Error("data not found , please try for different keyword")
            }
         })
         .then((inputdata)=>{setItems(inputdata.data); setPending(false)})
        .catch((err)=>{setError(err.message);setPending(false)})

    },3000)
},[])

    return(
        <div >
          {error && <h1>{error}</h1>} 
          {pending && <div className="loader"></div>}
          { items && <div className="animedetails">
            <div>
                <img src={items.images.jpg.large_image_url} alt="anime" />
                <h1>Anime-{items.title}</h1>
                <h3>Year-{items.year}</h3>
                <h2>Ratings-{items.score}</h2>
                <h2>Duration-{items.duration}</h2>
                { <div className="producers">
                    Producer Details 
                    {items.producers.map(element => {
                        return(
                            <>
                            <br />
                        <h3>{element.type}</h3>
                        <br />
                        <h3>{element.name}</h3>
                        <br />
                        <h3>{element.url}</h3>
                        <br />
                            </>
                        )
                        

                    })}
                </div> }
                 
                  <p>{items.synopsis}</p>
                  </div>
                  </div>} 
        </div>
    );
}

 
export default Animedetails;