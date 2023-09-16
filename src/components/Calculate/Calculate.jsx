/* eslint-disable react/prop-types */


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Calculate = ({ items }) => {
  

    let total = 0;
    items?.map((item) => {
        total = item.credit + total;
    });
    let reaminingTime =( 20 - total);
    let totalTaka=0;
    items?.map((itemTk)=>{
        totalTaka =itemTk.price+totalTaka;
    })
    // console.log(reaminingTime);
      
    if (total > 20) {
        // Display a toast notification for Reamining credit
        return toast.error("Reamining credit");
    }
<ToastContainer/>
// console.log(total);
    return (
        <div className="w-[350px] rounded-xl bg-slate-500">
            <div className=" mt-2 roun p-4 rounded-xl bg-slate-200 w-[350px] ">
                <h3 className="text-lg font-bold text-[#2F80ED] border-b border-gray-600">
                    Credit Hour Remaining <span>{reaminingTime}</span> hr
                    
                </h3>
                
                
                <h2 className="text-xl font-bold border-b my-2 border-gray-600">Course Name</h2>
                {items.map((item, i) => (
                    <li className="list-decimal" key={i}>
                        {item.course_name}
                    </li>
                ))}
                <h2 className="text-base mt-2 mb-2 font-medium border-b border-gray-600">
                    Total Credit Hour : <span>{total}</span> hr{" "}
                </h2>
                <h2 className="text-base font-semibold mb-2">
                    Total price: <span>{ }</span> USD
                </h2>
            </div>
            
        </div>
    );
};

export default Calculate;