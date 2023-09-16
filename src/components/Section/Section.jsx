import { useEffect, useState } from "react";
import Div from "../Div/Div";
import Calculate from "../Calculate/Calculate";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Section = () => {
  const [sections, setSection] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setSection(data));
  }, []);
  const handleButton = (data) => {
    if (items.length) {
      let isExist = items?.find(
        (item) => item.course_name === data.course_name
      );
      if (isExist) {
        return toast.error("Alaready Exist!");
      } else {
        setItems([...items, data]);
      }
    } else {
      setItems([data]);
    }
  };



  return (
    <div className=" flex  space-x-4 ">
      {/* <h1 className="text-4xl">Section :{sections.length}</h1> */}
      <div className="grid grid-cols-3 gap-3">
        {sections.map((section) => (
          <Div
            key={section.img}
            handleButton={handleButton}
            div={section}
          ></Div>
        ))}
      </div>
      <div>
        <Calculate items={items}></Calculate>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Section;




