/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Slots = ({ deliveryList, setDeliveryList }) => {
  // Slots.propTypes = {
  //   deliveryList: PropTypes.string.isRequired
  // }

  const [todos, setTodos] = useState({});
  const [inprogress, setInprogress] = useState({});
  const [closed, setClosed] = useState({});

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const ftodos = deliveryList.filter((task) => task.status === "todo");
    const fInprogress = deliveryList.filter(
      (task) => task.status === " Inprogress"
    );
    const fClosed = deliveryList.filter((task) => task.status === "Closed");

    setTodos(ftodos);
    setInprogress(fInprogress);
    setClosed(fClosed);
  }, [deliveryList]);

  const statuses = ["todo", "inprogress", "closed"];

  return (
    <div className="flex gap-16">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          deliveryList={deliveryList}
          setDeliveryList={setDeliveryList}
          todos={todos}
          inprogress={inprogress}
          closed={closed}
        />
      ))}
    </div>
  );
};

export default Slots;

// eslint-disable-next-line react/prop-types
const Section = ({
  status,
  deliveryList,
  setDeliveryList,
  todos,
  inprogress,
  closed,
}) => {
  let text = "Todo";
  let bg = "bg-slate-500";
  let taskToMap = todos;

  if (status === "inprogress") {
    text = " In progress";
    bg = "bg-orange-500";
    taskToMap = inprogress;
  }

  if (status === "closed") {
    text = "Completed";
    bg = "bg-green-500";
    taskToMap = closed;
  }

  return (
    <div className="w-64  ">
      <Header text={text} bg={bg} count={taskToMap.length} />
      {taskToMap.length > 0 &&
        taskToMap.map((task) => (
          <Task
            key={task.Id}
            task={task}
            deliveryList={deliveryList}
            setDeliveryList={setDeliveryList}
          />
        ))}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex  items-center h-12 pl-4 rounded-md 
   uppercase text-sm text-white`}
    >
      {text}
      <div className="ml-2 bg-white rounded-full text-black  h-5 w-5 flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};
const Task = ({ task, deliveryList,setDeliveryList }) => {
  return(
     <div className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab`}>
    <p>{task.customerName}</p>
    <button className="absolute"> </button>
  </div>
  );
};
