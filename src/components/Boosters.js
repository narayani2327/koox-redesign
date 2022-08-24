import { Component } from "react";
import Item from "./Item";
import Gut from "../assets/Gut-Cleanser.png";
import Turmaric from "../assets/TURMERIC_DEFENSE.png";
import Beet from "../assets/Beet-Glow.png";
class Boosters extends Component {
    render() { 
        return (
            <div className="items">
                <Item name="Gut Cleanser" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={Gut}/>
                <Item name="Turmeric Defence" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={Turmaric}/>
                <Item name="Beet Glow" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={Beet}/>
            </div>
        );
    }
}
 
export default Boosters;