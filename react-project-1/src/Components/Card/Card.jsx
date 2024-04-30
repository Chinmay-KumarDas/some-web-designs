import "./Card.css";

export const Card = (props)=>{
    return(
        <div className="card">
            <div className="top">
                <img src= {props.imag}/>
                <p id="up"><i class="fa-regular fa-heart"></i></p>
                <p id="down-left">$$$$</p>
                <p id="down-right"><i class="fa-solid fa-scissors"></i> 10%</p>
            </div>

            <div className="flex">
                <p id="origin">{props.origin}</p>

                <p id="state"><i class="fa-regular fa-clock"></i> Open Now</p>
            </div>

            <h3>{props.name} <i class="fa-solid fa-circle-check"></i></h3>

            <p>{props.dish}</p>

            <div className="flex">
                <p className="flex starts"> 
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>

                <span>5.0</span>
                </p>

                <p>
                <i class="fa-solid fa-location-dot"></i>
                {props.place}
                </p>
            </div>

            <div className="flex">
                    <a><i class="fa-solid fa-phone"></i> Call</a>
                    <a><i class="fa-solid fa-map-pin"></i> Show Map</a>
                    <a><i class="fa-solid fa-utensils"></i> Viwe menu</a>
                </div>

        </div>

    );
    
}