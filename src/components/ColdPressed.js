import { Component } from "react";
import Item from "./Item";
import Ultimate from "../assets/ultimate-detox.png";
import Drinkable from "../assets/drinkable_skincare.png";
import Hydro from "../assets/hydro green.png";
import Happy from "../assets/HAPPY_GUT.png";
import Shield from "../assets/WINTER_IMMUNITY.png";
import DrGreen from "../assets/DR-GREEN.png";
import CocoWater from "../assets/COCOH2O.png";
class ColdPressed extends Component {
    render() { 
        return (
            <div className="items">
                <Item name="Ultimate Detox" price="7.95" contains="Apple, lemon, celery, parsley, spinach, kale, ginger" nutrients={["Per 100ml:","Energy - 174kj(41kcal)","Fat - 0.1 of which saturated 0.0","Carbohydrates 9.2g of which sugar 9.0g","Fibre - 0.7g","Protein - 0.4g","Salt - 0.02g"]} img={Ultimate}/>
                <Item name="Drinkable Skincare" price="7.95" contains="Apple, beetroot, carrot, aloe vera" nutrients={["Per 100ml:","Energy - 174kj(41kcal)","Fat - 0.0 of which saturated 0.0","Carbohydrates 9.3g of which sugar 9.0g","Fibre - 1.0g","Protein - 0.3g","Salt - 0.03g"]} img={Drinkable}/>
                <Item name="Hydro Green" price="7.95" contains="Coconut water pure, pineapple, spinach, kale, mint" nutrients={["Per 100ml:","Energy - 153kj(36kcal)","Fat - 0.2 of which saturated 0.1","Carbohydrates 7.7g of which sugar 7.7g","Fibre - 0.6g","Protein - 0.5g","Salt - 0.13g"]} img={Hydro}/>
                <Item name="Happy Gut" price="7.95" contains="Pineapple, celery, ginger" nutrients={["Per 100ml:","Energy - 182kj(42kcal)","Fat - 0.1 of which saturated 0.0","Carbohydrates 10.1g of which sugar 10.0g","Fibre - 0.1g","Protein - 0.3g","Salt - 0.02g"]} img={Happy}/>
                <Item name="Shield Immunity" price="7.95" contains="Carrot, orange, lemon, turmeric, ginger" nutrients={["Per 100ml:","Energy - 179kj(42kcal)","Fat - 0.3 of which saturated 0.1","Carbohydrates 8.4g of which sugar 7.2g","Fibre - 1.9g","Protein - 0.6g","Salt - 0.8g"]} img={Shield}/>
                <Item name="Dr. Green" price="7.95" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={DrGreen}/>
                <Item name="Coco Water" price="7.50" contains="Cucumber, spinach, parsley, kale, lemon, celery, ginger" nutrients={["Per 100ml:","Energy - 81kj(20kcal)","Fat - 0.5 of which saturated 0.2","Carbohydrates 1.9g of which sugar 1.4g","Fibre - 1.1g","Protein - 0.6g","Salt - 0.5g"]} img={CocoWater}/>
            </div>
        );
    }
}
 
export default ColdPressed;