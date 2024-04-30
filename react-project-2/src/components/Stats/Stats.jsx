import "./Stats.css";

import image1 from "../../images/Screenshot 2024-02-02 174637.png";
import image2 from "../../images/Screenshot 2024-02-02 174802.png";

export const Stats = () =>{
    return(
        <div className="stats">

            <div className="Email">
                <div className="heading">
                    <h2>Email Statistics</h2>
                    <h5>Last Campaign Performance</h5>
                </div>

                <img src={image1}></img>

            </div>

            <div className="user">
                <div className="heading">
                    <h2>Users Behavior</h2>
                    <h5>24 Hours performance</h5>
                </div>

                <img src={image2}></img>

            </div>

        </div>
    );
}