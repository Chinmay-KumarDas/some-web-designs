import "./Card.css";

export const Card = (props) =>{
    return(
        <div className="card" id={props.eId}>

                <div className="flex" >
                    <div>
                        <h4>{props.title}</h4>
                        <p>{props.value}</p>
                    </div>

                    <i class={props.icon}></i>
                </div>
                
                <hr/>
                
                <div className="foot">
                    <i class="fa-solid fa-arrow-up">3.48%</i>
                    <p> Since last month</p>
                </div>
            </div>
    );
}