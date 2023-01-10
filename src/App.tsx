import React from "react"
import Pizza from "./components/pizza"
import pizzas from "./data/pizzas.json"
import AppCSS from "./App.module.css"
const App = () => {
    return (
      <div className={AppCSS.container}>
        <ul>
            {pizzas.map(pizza=>{
                return(

                    <Pizza key={pizza.id} pizza={pizza}/>
                )
            })}
        </ul>
      </div>
    )
  }

  export default App