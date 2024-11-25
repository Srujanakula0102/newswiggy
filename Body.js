import Restrant from "./Restrant";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";


const Body = ()=>{

  let [Restlist1 , setRestList]= useState([])
const [search, setSearch] = useState([]);
const [filterRest, setFilterRest] = useState([]);


  useEffect(()=>{
   fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9692624&lng=79.59263039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

  setRestList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilterRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  

    return Restlist1 == 0 ? (<Shimmer></Shimmer>) : (
        <div className='body'>
            <div className='search'>
            <input type='text' placeholder='Search' value={search} onChange={(e)=>{
              setSearch(e.target.value);
            }}></input>
            <button 
            onClick={()=>{
              const filetrserach = Restlist1.filter((res) =>
                 res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilterRest(filetrserach)
console.log(search)
            }}> onClick</button></div>
           <button className="filter-btn" onClick={()=>{
           const Filtered = Restlist1.filter((res)=>
            res.info.avgRating>4.2
           );
           setFilterRest(Filtered);
           }}>top Rated ITEMS</button>
            <div className='list'>
          {filterRest.map((restraunt) =>(
            <Restrant key={restraunt.info.id} ResObj={restraunt}></Restrant>)
          )}
          
            </div>
            </div>
        
    );
    
};

export default Body;

