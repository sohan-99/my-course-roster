/* eslint-disable react/prop-types */
import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Div = ({ div, handleButton }) => {
    const { img, course_name, course_details, price, credit } = div;

    return (
        <div className='bg-slate-100 rounded-lg p-2 '>
            <img src={img} alt={`Cover picture of the course_name ${course_name}`} />
            <h3 className="mt-2 text-lg font-semibold">{course_name}</h3>
            <h2 className="mt-2 text-sm font-normal text-[#1C1B1B99]">{course_details}</h2>
            <div className='mt-3 flex space-x-2 text-base font-medium'>
                <div className='flex space-x-1'>
                    <p className='mt-1'><FiDollarSign /></p>
                    <p>Price: {price}</p>
                </div>
                <div>
                    <p className='mt-1'><BsBook /></p>
                </div>
                <p>Credit: {credit}</p>
            </div>
            <button onClick={() => handleButton(div)} className='mt-2 text-lg font-semibold text-white bg-[#2F80ED] w-full rounded-lg'>Select</button>
        </div>
    );
};

Div.propTypes = {
    div: PropTypes.object.isRequired

};

export default Div;
