/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getStoredDonation } from "../../utility/localStorage";

const Statics = () => {

  const [mydonation,setMyDonatio]=useState();
  const totalDonation=12-mydonation;
  useEffect(()=>{
    const storedDonations=getStoredDonation();
    // console.log(storedDonations.length);
    setMyDonatio(storedDonations.length);
  },[])
  // console.log(mydonation);

  return (
    <div className="mt-28 ml-10">
      <Chart 
      type='pie'
      width={400}
      height={400}
      series={[mydonation,totalDonation]}
      options={{
        title:{text:'Donation PieChart'},
        noData:{text:"Empty Data"},
        labels:['Your donation','Total donation']
      }}
      >
        
      </Chart>
    </div>
  );
};

export default Statics;
