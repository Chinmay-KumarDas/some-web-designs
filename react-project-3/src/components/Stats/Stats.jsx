import "./Stats.css";

import image1 from "../../images/Screenshot 2024-02-05 152413.png";
import image2 from "../../images/Screenshot 2024-02-05 152455.png";
export const Stats = () =>{
    return(
        <div className="stats">

            <div className="last">
                <div className="heading this">

                    <div>
                        <h5>OVERVIEW</h5>
                        <h2>Sales Value</h2>
                    </div>

                    <div className="butns">
                    <a id="month">
                        Month
                    </a>
                    <a>
                        Week
                    </a>
                    </div>
                    
                </div>

                <img src={image1}></img>

            </div>

            <div className="user">
                <div className="heading">
                    <h5>PERFORMANCE</h5>
                    <h2>Users Behavior</h2>
                </div>

                <img src={image2}></img>

            </div>

        </div>
    );
}