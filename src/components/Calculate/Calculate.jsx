/* eslint-disable react/prop-types */


const Calculate = ({items}) => {
    // console.log(items);
    let total=0;
    items?.map(item=>{
        total= item.credit+total

    })
console.log(total);
if(total >20){
    return alert('reamining credit')
}

    return (
        <div className="w-96 rounded-3xl bg-slate-500">
 <div className=" mt-6 p-4 bg-slate-200 w-[100%]">
          <h3>Credit Hour Remaining 20 hr</h3>
               <h2>Course Name</h2>
          {
              items.map((item, i)=> <li className="list-decimal" key={i} >{item.course_name}</li>)
          }
            <h2 className="text-4xl">Total Credit Hour :<span>{total}</span>hr  </h2>
  </div>
        </div>
       
    );
};

export default Calculate;

