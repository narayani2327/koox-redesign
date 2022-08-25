import { Component } from "react";
import Item from "./Item";
import Dark from "../assets/Dark-choco-peanuts.png";
import Dates from "../assets/dates.png";
import Hemp from "../assets/Hemp-protein-ball.png";
class Treats extends Component {
    render() { 
        return (
            <>
                <p className="main-title">Treats</p>
                <div className="items">
                    <Item name="Dark Choco Peanuts" price="3" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={Dark}/>
                    <Item name="Medjool dates& Walnuts" price="3" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={Dates}/>
                    <Item name="Hemp Protein Balls" price="3.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={Hemp}/>
                </div>
            </>
        );
    }
}
 
export default Treats;