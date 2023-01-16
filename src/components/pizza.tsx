import { AppSetStateContext, useSetState } from './AppState';

interface Pizza {
    id:number;
    name:string;
}

interface Props{
    pizza:Pizza;
}
const Pizza:React.FC<Props> = ({pizza}) => {

const setState = useSetState()
  const handleOnClick=()=>{
    setState((state)=>{
      return{
        ...state,cart:{...state.cart,items:[...state.cart.items,{id:pizza.id,name:pizza.name}]}
      }
    })
  } 
  return (
    <div>{pizza.name}<button onClick={handleOnClick}>Add to Cart</button></div>
  )
}

export default Pizza