import { Component } from "react";
import Item from "./Item";
import VitC from "../assets/VITC_WL.png";
import Keto from "../assets/Keto_Greens_web.png";
import GreenHealer from "../assets/GREENHEALER_WL.png";
import Brain from "../assets/BRAINPOWER_WL.png";
class Boosters extends Component {
    render() { 
        return (
            <>
            <p className="main-title">Smoothies</p>
                <div className="items">
                    <Item name="Vit C Immunity" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={VitC}/>
                    <Item name="Keto Green" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={Keto}/>
                    <Item name="Green Healer" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={GreenHealer}/>
                    <Item name="Brain Power" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={Brain}/>
                </div>
            </>
        );
    }
}
 
export default Boosters;