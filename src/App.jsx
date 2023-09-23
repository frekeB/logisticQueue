import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react'

import CreateDelivery from './components/CreateDelivery';
import Slots from './components/Slots';


function App() {
  const [deliveryList, setDeliveryList] = useState([]);

  console.log("deliveryList", deliveryList);

useEffect(()=>{
//   setDeliveryList(JSON.parse(localStorage.getItem("deliveryList")))
}, []);

  return    (
    <>
    
    <Toaster/>
   <div className='bg-slate-100 w-screen h-screen flex flex-col items-center pt-32 gap-16'>
   <CreateDelivery deliveryList={deliveryList} setDeliveryList={setDeliveryList}/>
     <Slots deliveryList={deliveryList} setDeliveryList={setDeliveryList}/>
    </div> 
    
    </>
    )  
  
}

export default App
