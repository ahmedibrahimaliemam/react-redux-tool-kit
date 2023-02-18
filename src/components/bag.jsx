import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Bag = () => {
    const state=useSelector(state=>state.cart) ;
    const dispatch=useDispatch() ;
    let sum=0 ;
        for(let i=0 ; i<state.length ; i++){
            sum+=state[i].price*state[i].quantatity ;

        }
    return ( 
        <div className="py-5">
        <h1 className="text-center py-5" style={{fontWeight:"700"}}>Products in cart</h1>
        <h3 className="text-center">Total price is : <span className="bg-success text-light">{sum.toFixed(2)} $</span></h3>
        <table className="table">
  <thead className="text-light bg-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product title</th>
      <th scope="col">Product image</th>
      <th scope="col">product price</th>
      <th scope="col">Quantaty</th>
    </tr>
  </thead>
  <tbody>
    {
        state.map((product)=>{
            return product.quantatity!=0 ? <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.name}</td>
            <td><img style={{width:"60px"}} src={product.image} alt={product.name}/></td>
            <td>{product.price}</td>
            <td>{product.quantatity}</td>
          </tr> :"" 

        })
  
}
  </tbody>
</table>
        </div>
     );
}
 
export default Bag;