import { Card } from "../Card/Card.jsx";
import "./Hot.css";


export const Hot = () =>{
    return(
        <div className="hot">
            <div className="heading1">
                <i class="fa-solid fa-fire"></i>
                <h1>Hot & Fresh Local Business</h1>
                <h4>Here is Description for this section</h4>
            </div>

            <div className="cards">
                <Card
                    imag = "https://a.cdn-hotels.com/gdcs/production14/d1102/6b2f2810-a6c9-11e8-b766-0242ac110007.jpg"
                    dish = "Japanese, Sushi Bars"
                    origin = "JAPANESE"
                    name = "Japoneesa"
                    place = "Seatlle"
                ></Card>

                <Card
                    imag = "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg"
                    dish = "Italian"
                    origin = "AMERICAN"
                    name = "LusiOs Pizza"
                    place = "San Francisco"></Card>
                
                <Card
                    imag = "https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg"
                    dish = "Italian"
                    origin = "AMERICAN"
                    name = "Fino Ristorent"
                    place = "San Francisco"></Card>
            </div>
        </div>
    );
}