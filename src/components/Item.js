import { Component } from "react";
class Item extends Component {
    render() { 
        return (
            <div className="item-details">
                <img src={this.props.img}></img>
                <div className="item-info">
                    <p className="name">{this.props.name}</p>
                    <p className="price">{this.props.price}</p>
                    <p className="contains">{this.props.contains}</p>
                    <p className="nutrients">
                        {this.props.nutrients[0]}
                        <ul>
                            <li>{this.props.nutrients[1]}</li>
                            <li>{this.props.nutrients[2]}</li>
                            <li>{this.props.nutrients[3]}</li>
                            <li>{this.props.nutrients[4]}</li>
                            <li>{this.props.nutrients[5]}</li>
                            <li>{this.props.nutrients[6]}</li>
                        </ul>
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Item;