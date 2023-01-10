import React from 'react'


interface Pizza {
    id:number;
    name:string;
}

interface Props{
    pizza:Pizza;
}
const Pizza:React.FC<Props> = ({pizza}) => {
  return (
    <div>{pizza.name}</div>
  )
}

export default Pizza