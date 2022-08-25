import { Component } from "react";
class Order extends Component{
    render(){
        return(
            <div className="orders">
                <p className="main-title">Order Now</p>
                <div className="order">
                    <ul>
                        <li><a href="https://www.ubereats.com/gb/feed?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMldDMUUlMjA3QlMlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKVmYzSDJ5MGJka2dSSnBfUm1vRVNJVlUlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTEuNTIwMDElMkMlMjJsb25naXR1ZGUlMjIlM0EtMC4xMzEyJTdE">Uber Eats</a></li>
                        <li><a href="https://deliveroo.co.uk/brands/koox-juice-farmacy">Deliveroo</a></li>
                        <li><a href="https://www.just-eat.co.uk/">Just Eat</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Order;