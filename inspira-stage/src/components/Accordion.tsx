import React from 'react';
import {Collapse} from 'react-collapse';
import { AiTwotoneMinusCircle, AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ open, toggle, title, desc }: any) => {
  return (
    <>
      <div className='pt-[10px]'>
        <div className='bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer'>
          <div onClick={toggle}>
            <p className='text-[22px] font-semibold'>{title}</p>
            <div className='text-[30px]'>
              {open ? <AiTwotoneMinusCircle /> : <AiOutlinePlus />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
