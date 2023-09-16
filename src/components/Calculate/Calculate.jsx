/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Calculate = ({ items }) => {
    // console.log(items);

    let total = 0;
    items?.map((item) => {
        total = item.credit + total;
    });
    let reaminingTime =( 20 - total);
    let totalTaka=0;
    items?.map((itemTk)=>{
        totalTaka =itemTk.price+totalTaka;
    })
    console.log(reaminingTime);
    // console.log(total);      
    if (total > 20) {
        return alert("reamining credit");
    }


    return (
        <div className="w-[350px] rounded-xl bg-slate-500">
            <div className=" mt-2 roun p-4 rounded-xl bg-slate-200 w-[350px]">
                <h3 className="text-lg font-bold text-[#2F80ED]">
                    Credit Hour Remaining <span>{reaminingTime}</span> hr
                    
                </h3>
                <hr/>
                
                <h2 className="text-xl font-bold">Course Name</h2>
                {items.map((item, i) => (
                    <li className="list-decimal" key={i}>
                        {item.course_name}
                    </li>
                ))}
                <h2 className="text-base font-medium">
                    Total Credit Hour : <span>{total}</span> hr{" "}
                </h2>
                <h2 className="text-base font-semibold">
                    Total price: <span>{totalTaka }</span> USD
                </h2>
            </div>
        </div>
    );
};

export default Calculate;
