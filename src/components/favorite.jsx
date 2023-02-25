import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "./slices/favoriteSlice";
const Favorite = () => {
    const dispatch=useDispatch() ;
    const favoriteState=useSelector(state=>state.addFavor) ;
    useEffect(()=>{
       localStorage.setItem("favorite", JSON.stringify(favoriteState))
    },[favoriteState])
    return ( 
        <div className="py-5">
        {
           JSON.parse(localStorage.getItem("favorite")).length!==0?
           <>
           <h1 className="text-center py-5" style={{fontWeight:"700"}}>Favorite</h1>
        <table className="table">
  <thead className="text-light bg-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product title</th>
      <th scope="col">Product image</th>
      <th scope="col">product price</th>
      <th scope="col">remove</th>
    </tr>
  </thead>
  <tbody>
    {
       favoriteState.map((product)=>{
            return<tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.name}</td>
            <td><img style={{width:"60px"}} src={product.image} alt={product.name}/></td>
            <td>{product.price}</td>
            <td><div onClick={()=>{
                dispatch(removeFromFav(product)) ;
                
                }} className="btn btn-danger">Remove from favorite</div></td>
          </tr>

        })
  
}
  </tbody>
</table></> :<h1 style={{fontWeight:"800",textAlign:"center"}}>No products were added to favorite</h1>

}
        </div>

     );
}
 
export default Favorite;