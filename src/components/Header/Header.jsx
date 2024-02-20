import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {

  const [open,setOpen]=useState([true]);

  return (
    <nav className="md:flex justify-between mt-6">
      {/* first element */}

      <div className="sm:flex gap-3">
      <button 
        className="md:hidden text-xl"
        onClick={()=>setOpen(!open)}
     >   
     {
        open===true? <FiAlignRight></FiAlignRight>:<ImCross></ImCross>
    }
      
       </button>
        <img
        className="h-14"
        src="Logo.png" alt="" />
      </div>
      {/* second element */}
      <div className={`md:flex mt-4 ${open?'hidden':''} sm:absolute pl-6 md:relative`}>
        <p className="mr-6">
          <NavLink to="/"
          >Home</NavLink>
        </p>
        <p className="mr-6">
          <NavLink to="/donation"
          >Donation</NavLink>
        </p>
        <p className="mr-2">
          <NavLink to="/statistics">Statics</NavLink>
        </p>
      </div>
    </nav>
  );
};

export default Header;
