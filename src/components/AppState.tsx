import React, {createContext,useState,useContext, useReducer, useEffect} from "react";


interface CartItem {id:number,name:string,quantity:number,price:number}


interface AppStateValue {
    cart:{
        items:CartItem[];
    }
}


const defaultStateValue: AppStateValue={
    cart:{
        items:[],
    } 
}
interface Action<T>{
    type:T;
}

interface AddToCartAction extends Action<'ADD_TO_CART'>{
    payload:{
        item:Omit<CartItem,"quantity">
    }
}

interface InitializeCartAction extends Action<"INITIALIZE_CART">{
    payload:{
        cart:AppStateValue["cart"]
    }
}
export const AppStateContext = createContext(defaultStateValue);

export const AppDispatchContext = createContext<React.Dispatch<AddToCartAction>|undefined>(undefined);




const reducer = (state:AppStateValue,action:AddToCartAction|InitializeCartAction)=>{
    if (action.type === "ADD_TO_CART"){

        const itemToAdd = action.payload.item
        const itemExists = state.cart.items.find((item)=>item.id===itemToAdd.id)
        return{
          ...state,cart:{...state.cart,items:itemExists?state.cart.items.map(item=>{
            if(item.id===itemToAdd.id){
              return{...item,quantity:item.quantity+1}
            }else{
              return item
            }
          }):[...state.cart.items,{id:itemToAdd.id,name:itemToAdd.name,quantity:1,price:10}]}
        }
    }else if(action.type==="INITIALIZE_CART"){
        return {...state,cart:action.payload.cart}
    }
    return state
}

export const useStateDispatch = ()=>{
    const dispatch = useContext(AppDispatchContext);
    if(!dispatch){
        throw new Error("useState was called outside of AppSetStateContext Provider")
    }
    return dispatch

}
const AppStateProvider = ({ children }:{children:React.ReactNode}) =>{

    const [state,dispatch] = useReducer(reducer,defaultStateValue);
    
    useEffect(()=>{
        const cart = window.localStorage.getItem("cart")
        if(cart){
            dispatch({type:"INITIALIZE_CART",payload:{cart:JSON.parse(cart)}})
        }
    },[])
    useEffect(()=>{
        window.localStorage.setItem("cart",JSON.stringify(state.cart))
    },[state.cart])
    return <AppStateContext.Provider value={state}><AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider></AppStateContext.Provider>
}


export default AppStateProvider