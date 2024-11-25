const Restrant =(props)=>{
  const {ResObj}=props;
  const {name,locality,cuisines,avgRating,cloudinaryImageId,costForTwo}= ResObj?.info;
 
   return( <div className='Resturantcart'>
    <div className='cart1'>
        <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId }></img>
        
    <h1>{name}</h1>
          <h4>{locality}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h5 > {costForTwo}</h5>
        
    </div>
    </div>
    )
    
}
export default Restrant;









