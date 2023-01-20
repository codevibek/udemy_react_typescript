import React from "react"
import CartCss from "./Cart.module.css"
import {  AppStateContext } from "./AppState";

interface Props {}


interface State {
    isOpen:boolean;
}

class Cart extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            isOpen:false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

     handleClick(e:React.MouseEvent<HTMLButtonElement,MouseEvent>){
        this.setState(prevState=>({isOpen:!prevState.isOpen}))
    }

    render(): React.ReactNode {
        return(
            <AppStateContext.Consumer>{(state)=>{
const itemCount = state.cart.items.reduce((sum,item)=>{
    return sum+item.quantity;
},0)
                return(
                    <div className={CartCss.cartContainer}>
                <button type="button" className={CartCss.button} onClick={this.handleClick}>
                    
                    {state.cart.items.length} pizzas</button>
                <div className={CartCss.cartDropDowm} style={{display:this.state.isOpen ?"block":"none"}}>
                    <ul>
                       
                        {state.cart.items.map(item=>{
                            return(<li key={item.id}>{item.name} &times; {item.quantity}</li>)
                        })}
                    </ul>
                </div>
            </div>
                )
            }}</AppStateContext.Consumer>
            
        )
    }
}

export default Cart