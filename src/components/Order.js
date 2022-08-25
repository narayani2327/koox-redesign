import { Component } from "react";
class Order extends Component{
    render(){
        return(
            <>
                <p className="main-title">Order Now</p>
                <div className="order">
                    <ul>
                        <li><a href="">Uber Eats</a></li>
                        <li><a href="">Deliveroo</a></li>
                        <li><a href="">Just Eat</a></li>
                    </ul>
                </div>
            </>
        );
    }
}
export default Order;