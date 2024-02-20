/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredDonation } from "../../utility/localStorage";
import DonationDetails from "../DonationDetails/DonationDetails";


const Donation = () => {

  const donationDatum=useLoaderData();
  const [donations,setDonations]=useState([]);
  const [datalength,setDatalength]=useState(4);
  // console.log(donationDatum.length);

      
  //  donationDatum.find(donationData=> donationData.id === )

  useEffect(()=>{
    const storedDonations=getStoredDonation();
    if(donationDatum.length>0){
      const totalDonations=[];
      for(const id of storedDonations){
        const donation=donationDatum.find(donation=>donation.id === id);
        if(donation){
          totalDonations.push(donation);
        }
      }
      setDonations(totalDonations);
    }
  },[donationDatum])




  return (
   <div>
     <div className="grid md:grid-cols-2 gap-4 mt-8">
      {
        donations.slice(0,datalength).map(donation=><DonationDetails 
        key={donation.id}
        donation={donation}
        ></DonationDetails>)
      }
    </div>
    <div className="text-center mt-3">
     <div className={datalength === donations.length ? 'hidden' : ''}>
     <button
       onClick={()=>setDatalength(donations.length)}
      className="bg-indigo-900 rounded-lg text-white p-2 m-1">
        Show All
      </button>
     </div>
    </div>
   </div>
  )
}

export default Donation
