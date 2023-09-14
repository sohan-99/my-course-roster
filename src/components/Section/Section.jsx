
import { useEffect, useState } from "react";
import Div from "../Div/Div";

const Section = () => {
    const [section, setSection] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setSection(data))
    }, [])
    return (
        <div className="md:w-2/3  mt-8">
            <h1 className="text-4xl">Section :{section.length}</h1>
            <div className="grid grid-cols-3 gap-3">
                {
                    section.map(section => <Div key={section.img} div={section} ></Div>)
                }
            </div>
        </div>
    );
};

export default Section;


