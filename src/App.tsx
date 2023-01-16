import React from "react"
import Pizza from "./components/pizza"
import pizzas from "./data/pizzas.json"
import AppCSS from "./App.module.css"
import PizzaSVG from "./svg/pizza.svg"
import Cart from "./components/cart"
import AppStateProvider from "./components/AppState"
const App = () => {
    return (
      <AppStateProvider>

      <div className={AppCSS.container}>
        <PizzaSVG width={120} height={120}/>
        <Cart/>
        <ul>
            {pizzas.map(pizza=>{
              return(
                
                    <Pizza key={pizza.id} pizza={pizza}/>
                )
            })}
        </ul>
      </div>
                </AppStateProvider>
    )
  }

  export default App