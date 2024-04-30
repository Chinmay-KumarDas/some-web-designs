import { Nav } from "../Nav/Nav";
import "./SearchArea.css";

export const SearchArea = () =>{
    return(
        <div className="page">
            <Nav/>

            <div className="search">
                <i class="fa-solid fa-layer-group"></i>
                <h1>Browse Anything! Explore Maharashtra</h1>
                <div>
                <div className="inpt">
                   <p>What</p>  
                    <input type="text" placeholder="Ex: food,service,barber,hotel"></input>
                    <p id="lftbodr">Where</p>
                    <p id="fade">
                        <i class="fa-solid fa-location-crosshairs"></i>
                        <span>Your City...</span>
                        <i class="fa-solid fa-caret-down"></i>
                    </p>
                </div>

                <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="types">
                    <p>American</p>
                    <p>Brazilian</p>
                    <p>Breakfast</p>
                    <p>Breakfast&Brunch</p>
                    <p>Caterers</p>
                </div>
            </div>
        </div>
    );
}