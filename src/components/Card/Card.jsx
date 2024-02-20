/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {title,category,picture,card_bg,category_bg,text_button_bg,id}=card;


  return (
  <Link className="w-full rounded-lg m-2" style={{backgroundColor:card_bg}} to={`/card/${id}`}>

  <figure className="h-2/3"><img src={picture} className="h-full" alt="Shoes" /></figure>
  <div className="h-1/3 ml-4 mt-4">
    <h2 className="w-max p-1 m-1 rounded-lg" style={{backgroundColor:category_bg,color:text_button_bg}}>
      {category}
    </h2>
    <p className="m-1 font-semibold" style={{color:text_button_bg}}>{title}</p>
  </div>

  </Link>
  )
}

export default Card
//<Link to={`/card/${id}`}></Link>
