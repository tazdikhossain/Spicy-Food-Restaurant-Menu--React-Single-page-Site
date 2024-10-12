import React,{Component} from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes.js";
import DishDetails from './DishDetail.js';

class Menu extends Component{
    state = {
        dishes: DISHES,
        selectedDish:null
    }

    onDishSelect = dish =>{
        console.log(dish);
        this.setState({selectedDish:dish});
    }

    render(){
        const menu = this.state.dishes.map(item => {
            return(
                <MenuItem 
                dish={item} 
                key={item.id}
                onDishSelect={this.onDishSelect}
                />
            );
        })


        let dishDetails = null;
        if(this.state.selectedDish != null)
        {
            dishDetails = <DishDetails dish={this.state.selectedDish}/>
        }


        return(
            <div className = "container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetails}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;