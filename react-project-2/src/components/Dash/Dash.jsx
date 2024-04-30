import { Card } from "../Card/Card";
import { Nav } from "../Nav/Nav";
import { Global } from '../Global/Global';
import "./Dash.css";
import { Stats } from "../Stats/Stats";

export const Dash = (props) =>{
    return(
        <div className="dash" onClick ={props.closeAside}>
            <Nav toggleAside ={props.toggleAside}></Nav>
            <div className="cards">
                <Card
                    eId ="first"
                    title ="Number"
                    value ="150GB"
                    icon ="fa-regular fa-circle-dot"
                    foot ="Update Now"
                    foot_icon ="fa-solid fa-rotate-right"
                ></Card>
                <Card 
                    eId="second"
                    title ="Revenue"
                    value ="$ 1,345"
                    icon ="fa-solid fa-money-bills"
                    foot ="Last day"
                    foot_icon ="fa-solid fa-calendar-days"
                ></Card>
                <Card
                    eId="third"
                    title ="Errors"
                    value ="23"
                    icon ="fa-solid fa-triangle-exclamation"
                    foot ="In the last hour"
                    foot_icon ="fa-regular fa-clock"
                ></Card>
                <Card
                    eId="forth"
                    title ="Followers"
                    value ="+45k"
                    icon ="fa-regular fa-heart"
                    foot ="Update Now"
                    foot_icon ="fa-solid fa-rotate-right"
                ></Card>

            </div>
            <Global></Global>
            <Stats></Stats>
        </div>
    );
}