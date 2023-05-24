import { Link } from "react-router-dom";
import { useState } from "react";
import anime from "../anime-logo.jpg";

const Navbar = () => {
  let[searchKey,setsearchKey]=useState(" ");
    return ( 
       <nav>
         <div className="logo">
           <Link to="/"><img src={anime} alt="logo" /></Link>
            <h1>MyAnimations</h1>
        </div>

        <div className="search">
        <input type="search" value={searchKey} onChange={(e)=>{setsearchKey(e.target.value)}}/>
         <Link to={`/search${searchKey}`}><button>search</button></Link>
        
        </div>
        <div className="signin">
        <button>Signin</button>
        </div>
       </nav>
     );
}
 
export default Navbar;