import "./Card.css";

export const Card = (props) =>{
    return(
        <div className="card" id={props.eId}>

                <div className="flex" >
                    <i class={props.icon}></i>
                    <div>
                        <h4>{props.title}</h4>
                        <p>{props.value}</p>
                    </div>
                </div>
                
                <hr/>
                
                <div className="foot">
                    <i class={props.foot_icon}></i>
                    <h4>{props.foot}</h4>
                </div>
            </div>
    );
}