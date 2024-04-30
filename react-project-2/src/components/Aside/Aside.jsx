import "./Aside.css";

export const Aside = () =>{
    return(
        <aside>
        <h2><i class="fa-brands fa-react"></i> React Dash</h2>
        <hr/>

        <div className="options">
            <div className="opt" >
                <img src="https://pics.craiyon.com/2023-07-02/a9d95391385940b2bd9edfd7cffbf10d.webp"/>
                <p>Tania Andew</p>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className="opt selected" >
            <i class="fa-solid fa-chart-pie"></i>
                <p>DASHBOARD</p>
            </div>
            
            <div className="opt" >
                <i class="fa-solid fa-cube"></i>
                <p>COMPONENTS</p>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className="opt" >
                <i class="fa-brands fa-wpforms"></i>
                <p>FORMS</p>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className="opt" >
                <i class="fa-solid fa-table"></i>
                <p>TABLES</p>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className="opt" >
                <i class="fa-solid fa-location-dot"></i>
                <p>MAPS</p>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className="opt" >
                <i class="fa-regular fa-chart-bar"></i>
                <p>CARTS</p>

            </div>
            <div className="opt" >
                <i class="fa-solid fa-calendar-days"></i>
                <p>CALENDER</p>
            </div>
            <div className="opt" >
                <i class="fa-solid fa-sheet-plastic"></i>
                <p>PAGES</p>
                <i class="fa-solid fa-caret-down"></i>
            </div>
        </div>

    </aside>
    );
}