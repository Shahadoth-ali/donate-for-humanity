/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonationDetails = ({donation}) => {

    const {title,category,picture,card_bg,category_bg,text_button_bg,id,price}=donation;

  return (
    <div className="w-full h-52 rounded-lg flex m-2" style={{backgroundColor:card_bg}}>

  <figure className="w-1/3"><img src={picture} className="h-full" alt="Shoes" /></figure>
  <div className="h-1/3 ml-10 mt-8">
    <h2 className="w-max p-1 m-1 rounded-lg" style={{backgroundColor:category_bg,color:text_button_bg}}>
      {category}
    </h2>
    <p className="m-1 font-semibold" style={{color:text_button_bg}}>{title}</p>
    <p className="m-1">{price}</p>
    <Link to={`/card/${id}`} className="m-1"><button className="rounded" style={{backgroundColor:text_button_bg}}>View Details</button></Link>
  </div>

  </div>
  )
}

export default DonationDetails
