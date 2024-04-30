import "./Aside.css";

export const Aside = ({toggleAside}) =>{
    return(
        <aside>
        <div className="head">
        <h2>React Admin </h2>
        <i class="fa-solid fa-bars" onClick={toggleAside}></i>
        </div>
        


        <div className="options">
            
            <div className="opt selected bold" >
                <i class="fa-solid fa-house blue" ></i>
                <p>Dasboards</p>
                <i class="fa-solid fa-angle-down blue" ></i>
            </div>
            
            <div className="opt ">
                <p className="subsec bold" >Dashboard</p>
            </div>
            
            <div className="opt " >
                <p className="subsec">Alternative</p>
            </div>
            
            <div className="opt" >
                <i class="fa-regular fa-copy" id="oreng"></i>
                <p>Example</p>
                <i class="fa-solid fa-angle-right"></i>
            </div>

            <div className="opt" >
                <i class="fa-solid fa-cube lightBlue"></i>
                <p>Components</p>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="opt" >
                <i class="fa-brands fa-wpforms" id="pink"></i>
                <p>Forms</p>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="opt" >
                <i class="fa-solid fa-table"></i>
                <p>Tables</p>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="opt" >
                <i class="fa-solid fa-location-dot" id="purple"></i>
                <p>Maps</p>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            <div className="opt" >
                <i class="fa-solid fa-bag-shopping" id="green"></i>
                <p>Widgets</p>
            </div>
            <div className="opt" >
                <i class="fa-regular fa-chart-bar lightBlue"></i>
                <p>Charts</p>

            </div>
            <div className="opt" >
                <i class="fa-solid fa-calendar-days" id="red"></i>
                <p>Calender</p>
            </div>
            <hr/>
            <h6>DOCUMENTATION</h6>

            <div className="opt" >
                <i class="fa-solid fa-rocket"></i>
                <p>Getting Started</p>
            </div>
            <div className="opt" >
                <i class="fa-solid fa-person-digging"></i>
                <p>Foudation</p>
            </div>
            <div className="opt" >
                <i class="fa-solid fa-cube"></i>
                <p>Components</p>
            </div>
            <div className="opt" >
                <i class="fa-solid fa-chart-pie"></i>
                <p>Plugins</p>
            </div>
        </div>

        

        

    </aside>
    );
}