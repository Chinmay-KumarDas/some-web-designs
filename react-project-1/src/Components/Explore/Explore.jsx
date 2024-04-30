import { PicCard } from "../PicCard/PicCard";
import "./Explore.css"

export const Explore = () =>{
    return(
        <div className="explore">
            <h1>
                <i class="fa-solid fa-location-dot"></i>
                 <span>Explore Hot Loctions</span>
            </h1>

            <div className="cards">
                <PicCard className="item"
                    name ="Austin"
                    imag ="https://a.cdn-hotels.com/gdcs/production14/d1102/6b2f2810-a6c9-11e8-b766-0242ac110007.jpg"
                ></PicCard>
                <PicCard className="item"
                    name ="Boston"
                    imag ="https://www.planetware.com/photos-large/USMA/boston-massachusetts-united-states-freedom-trail.jpg"
                ></PicCard>
                <PicCard className="item"
                    name ="Chicago"
                    imag ="https://cdn.vox-cdn.com/thumbor/8YXViBEBGhIax46txR8VHBfa9Ig=/0x0:5250x3500/1200x900/filters:focal(2205x1330:3045x2170):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63246049/shutterstock_350430827.0.jpg"
                ></PicCard>
                <PicCard className="item"
                    name ="Denver"
                    imag ="https://www.thediscoveriesof.com/wp-content/uploads/2022/01/Colrado-Capitol-Denver-3.jpg.webp"
                ></PicCard>
                <PicCard className="item"
                    name ="Los Angeles"
                    imag ="https://media.california.com/media/_versions_jpg/articlecomponent/optimized-shutterstock_1640611684__1200x799____v1220x__.jpg"
                ></PicCard>
                <PicCard className="item"
                    name ="New york"
                    imag ="https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg"
                ></PicCard>
            </div>
        </div>
    );
}