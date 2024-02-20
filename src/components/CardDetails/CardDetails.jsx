import { useLoaderData, useParams } from "react-router-dom"
import { saveDonation } from "../../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {

    const cards=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const card=cards.find(card=>card.id === idInt);

    console.log(card);


   const handleDonation=()=>{
     saveDonation(idInt);
     toast("Donation Successful.")
   }



  return (
    <div className="relative h-96 mt-5">
       <img 
      className="w-full h-full" 
      src={card.picture} alt="" />
  <div className="absolute inset-0 flex items-end">
    <div className="w-full h-20 bg-black opacity-50">
    <button className="ml-10 mt-4 p-2 rounded text-white" style={{background:card.text_button_bg}}
    onClick={handleDonation}
    >Donate {card.price}</button>
    </div>
    
  </div>
  <h1 className="mt-6 text-xl font-bold">{card.title}</h1>
  <p>{card.description}</p>
  <ToastContainer />
</div>

  )
}

export default CardDetails
