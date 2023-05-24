import { useEffect, useState } from "react";
import Animelist from "./Animelist";

function Home()
{
let[items,setItems]=useState(null)
let[pending,setPending]=useState(true)
let[error , setError] = useState(null)

useEffect(()=>{
    setTimeout(()=>{
       
        fetch("https://api.jikan.moe/v4/anime")
       
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
console.log(items)
    return(
        <div className="home">
            {error && <h1>{error}</h1>} 
          {pending && <div className="loader">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <span className="load">Loading....</span>
            </div>}
          { items && <Animelist items={items} title="Stream animes online"/>}
        </div>
    );
}

export default Home;