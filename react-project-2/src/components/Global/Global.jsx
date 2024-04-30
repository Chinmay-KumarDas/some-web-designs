import "./Global.css";
import image from "../../images/world.png";
import { AU, BZ, EG, GR, RO, US } from 'country-flag-icons/react/3x2';

export const Global = () =>{
    return(
        <div className="global">
            <div className="heading">
                <h2>Global Sales by Top Locations</h2>
                <h5>All products that were shipped</h5>

                <div className="info">
                    <ul>
                        <li>
                        <US title="United States" className="flag"/>

                        <p>USA</p>

                        <p>2,920</p>

                        <p>53.23%</p>
                        
                        </li>
                        <li>
                        <GR title="Germany" className="flag"/>

                        <p>Germany</p>

                        <p>1,300</p>

                        <p>20.43%</p>
                        
                        </li>
                        <li>
                        <AU title="Australia" className="flag"/>

                        <p>Australia</p>

                        <p>760</p>

                        <p>10.35%</p>
                        
                        </li>
                        <li>
                        <EG title="United Kingdom" className="flag"/>

                        <p>UK</p>

                        <p>690</p>

                        <p>7.87%</p>
                        
                        </li>
                        <li>
                        <RO title="Romania" className="flag"/>

                        <p>Romania</p>

                        <p>600</p>

                        <p>5.94%</p>
                        
                        </li>
                        <li>
                        <BZ title="Brasil" className="flag"/>

                        <p>Brasil</p>

                        <p>550</p>

                        <p>4.34%</p>
                        
                        </li>
                    </ul>
                    <img src={image}></img>
                </div>
            </div>
        </div>
    );
}