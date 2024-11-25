import { useState } from "react";
import { Link } from "react-router-dom";

const Header= ()=>{
    const [ loginbtn , setLoginbtn] = useState("login");
    // let loginbtn ="login"
    console.log("rendering us")
    return (
       <div className='head'>
        <div className='logo'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KybsL4EorbsqN_qfyqMrTsU2BR4J1hjuBQ&s'></img></div>
        <div className='Navitem'>
            <ul>
               <li><Link to="/">Home</Link></li> 
                <li><Link to="/card">Card</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="/contact" > Contact</Link></li>
                <button className="login" onClick={()=>{
                  loginbtn =="login" ? setLoginbtn("logout"):setLoginbtn("login");
                    }}
                    >{loginbtn}</button>
            </ul>
        </div>
       </div>
    )
}
export default Header;