import { Component } from "react";
import Item from "./Item";
import White from "../assets/white omega3.png";
import Pink from "../assets/Pink coco omega 4.png";
import Blue from "../assets/BLUE-MAJIK.png";
class Boosters extends Component {
    render() { 
        return (
            <>
                <p className="main-title">Bowls</p>
                <div className="items">
                    <Item name="White omega - 3" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:"," Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={White}/>
                    <Item name="Pink Coco Omega - 4" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={Pink}/>
                    <Item name="Blue Majik" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={Blue}/>
                </div>
            </>
        );
    }
}
 
export default Boosters;