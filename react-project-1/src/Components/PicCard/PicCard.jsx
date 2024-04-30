import "./PicCard.css";

export const PicCard = (props) =>{
    return(
        <div className="PicCard">
            <img src = {props.imag}></img>

            <h5>{props.name}</h5>
        </div>
    );
}