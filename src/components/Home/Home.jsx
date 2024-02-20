/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react"
import Card from "../Card/Card";


const Home = () => {

 
  const [cards,setCards]=useState([]);
  const [text,setText]=useState();

  useEffect(()=>{
    fetch('cards.json')
    .then(res=>res.json())
    .then(data=>setCards(data));
  },[])



  const handleClick=(e)=>{
    e.preventDefault();
    // console.log(e.taget.name);
    if(text=='Health'){
   const healthCard=cards.filter(card=>card.category === 'Health');
   setCards(healthCard);
    }
    else if(text=='Education'){
      const eduCard=cards.filter(card=>card.category === 'Education');
      setCards(eduCard);
    }
    else if(text=='Clothing'){
      const clothCard=cards.filter(card=>card.category === 'Clothing');
      setCards(clothCard);
    }
    else if(text=='Food'){
      const foodCard=cards.filter(card=>card.category === 'Food');
      setCards(foodCard);
    }
  }

const handleChange=(e)=>{
  //  console.log(e.target.value);
   setText(e.target.value);
}

  return (
    <div>
      {/* first element banner */}
     <div className="my-16">
     <h1 className="text-center md:text-5xl font-bold">I Grow By Helping People In Need</h1>
      <form onSubmit={handleClick} className="mt-8 text-center">
        
        <input type="text" className="border p-1" name="name" placeholder="type here to search" onChange={handleChange}/>
        <button 
        type="submit"
        className=" bg-red-500 text-white rounded-md m-1 p-1">Search</button>
       
      </form>
     </div>
       {/* second element */}
      <div className="md:grid grid-cols-4 gap-3">
        {
          cards.map(card=><Card 
          key={card.id}
          card={card}
          ></Card>)
        }
      </div>
    </div>
  )
}

export default Home
