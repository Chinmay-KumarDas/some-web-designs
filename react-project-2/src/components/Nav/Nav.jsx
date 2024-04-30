import "./Nav.css";
export const Nav = (props) =>{
    return(
        <nav>
        <div>
            <i class="fa-solid fa-bars"  onClick={props.toggleAside}/>
            <p>Buttons</p>
            <div className="inpt">
                <i class="fa-solid fa-magnifying-glass" />
                <input type="text" placeholder="Search..."></input>
            </div>

        </div>      

        <div>
            <div><i class="fa-solid fa-earth-asia" /><i class="fa-solid fa-caret-down" /></div>
            <div><i class="fa-solid fa-bell" /><i class="fa-solid fa-caret-down" /></div>
            <div><i class="fa-solid fa-list" /><i class="fa-solid fa-caret-down" /></div>
        </div>    

        </nav>
    );
}