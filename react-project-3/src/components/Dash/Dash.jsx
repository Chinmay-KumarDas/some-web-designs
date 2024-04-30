import { Nav } from "../Nav/Nav";
import {Card} from "../Card/Card"
import "./Dash.css";
import { Stats } from "../Stats/Stats";

export const Dash = ({toggleAside, showAside}) =>{
    return(
        <div className="dash">
            <Nav toggleAside={toggleAside} showAside={showAside}></Nav>

            <div className="row bl">
                <div className="line">
                    <h3>Default</h3>
                    <i class="fa-solid fa-house" ></i>
                    <p>Dasboards</p>
                    <p>Default</p>
                </div>

                <div className="butns">
                    <a>
                        New
                    </a>
                    <a>
                        Filter
                    </a>
                </div>
            </div>

            <div className="cards">
                <Card
                    eId ="first"
                    title ="TOTAL TRAFFIC"
                    value ="350,897"
                    icon ="fa-solid fa-hand-point-up"
                    foot ="Update Now"
                ></Card>
                <Card 
                    eId="second"
                    title ="NEW USER"
                    value ="2,356"
                    icon ="fa-solid fa-chart-pie"
                    foot ="Last day"
                    
                ></Card>
                <Card
                    eId="third"
                    title ="SALES"
                    value ="924"
                    icon ="fa-solid fa-money-bill"
                    foot ="In the last hour"
                    
                ></Card>
                <Card
                    eId="forth"
                    title ="PERFORMANCE"
                    value ="46.65%"
                    icon ="fa-solid fa-chart-column"
                    foot ="Update Now"
                ></Card>

                
            </div>

            <Stats></Stats>

            <div className="row">
                <div className="item">
                    <div className="heading">
                        <h2>Team memebers</h2>
                    </div>
                    <hr></hr>

                    <div>
                        
                    </div>
                </div>

                <div className="item">
                    <div className="heading">
                        <h2>To do list</h2>
                    </div>
                    <hr></hr>
                    <div>

                    </div>
                </div>

                <div className="item">
                    <div className="heading">
                        <h2>Progress track</h2>
                    </div>
                    <hr></hr>
                    <div>

                    </div>
                </div>

            </div>
        </div>

        
    );
}