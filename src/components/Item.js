import { Component } from "react";
class Item extends Component {
    render() { 
        window.addEventListener('scroll',()=>{
            var reveals=document.querySelectorAll(".item-details")
            for(var i=0;i<reveals.length;i++){
                var windowheight=window.innerHeight
                var revealtop=reveals[i].getBoundingClientRect().top
                var revealpoint=150
                if(revealtop<windowheight-revealpoint){
                    if (i%2==0)
                        reveals[i].classList.add('active')
                    else
                        reveals[i].classList.add('activee')
                }
                else{
                    if (i%2==0)
                        reveals[i].classList.remove('active')
                    else
                        reveals[i].classList.remove('activee')
                }
            }
        })
        return (
            <div className="item-details">
                <img src={this.props.img}></img>
                <div className="item-info">
                    <p className="name">{this.props.name} - &#163; {this.props.price}</p>
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