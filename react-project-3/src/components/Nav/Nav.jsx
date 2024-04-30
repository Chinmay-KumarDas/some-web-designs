import "./Nav.css";
export const Nav = ({showAside, toggleAside}) =>{
    return(
        <nav>
        <div className="inpt">
            {(!showAside)&&<i class="fa-solid fa-bars" onClick={toggleAside}></i> }
            <i class="fa-solid fa-magnifying-glass" />
            <input type="text" placeholder="Search..."></input>
        </div>  

        <div>
            <i class="fa-solid fa-bell" />
            <i class="fa-regular fa-copy" ></i>
            <div>
                <img src="https://pics.craiyon.com/2023-07-02/a9d95391385940b2bd9edfd7cffbf10d.webp"></img>
                <p>John Snow</p>
            </div>
        </div>    

        </nav>
    );
}