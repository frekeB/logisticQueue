import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import  toast from 'react-hot-toast';


const CreateDelivery = ({deliveryList, setDeliveryList}) => {
    
    const [task, setTask] = useState({
        customerId: "",
        customerName: "",
        status: "Todo" // can be Inprogress or Closed
    });
  
    //console.log(task)
    const handleSubmit =(e) => {
    e.preventDefault();

    if(task.customerName.length < 3) 
    return toast.error("A task must have more than three characters")
    if(task.customerName.length > 100 )
     return toast.error("A task must have more than 100 characters")
    
        setDeliveryList((prev)=>{
            const list =[...prev, task];

    localStorage.setItem("tasks", JSON.stringify(list))

            return list;
        });

        toast.success("Queue Created")
        setTask({
            customerId:"",
            customerName:"",
            Status:"Todo"

        })
    }
  
    return (
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    className="border-2 border-slate-400 bg slate-100 rounded-md mr-4 h-12 w-64 px-1"
    value={task.customerName}
    onChange ={(e)=> setTask({...task, customerId: uuidv4(), customerName: e.target.value,})}
    />

    <button className="bg-gray-900 rounded-md px-4 h-10 text-white">Create</button>
    </form>
  )
}

export default CreateDelivery