import React from 'react';
import { Collapse } from 'react-collapse';
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";

const Accordion = ({ open, toggle, title, desc, imgSrc }) => {
  return (
    <div className='container mt-sm-3 mt-md-4'>
      <div className='grid lg:grid-cols-2 items-center'>
        <div className='mb-md-0'>
          <div className='accordion accordion-alt' id='industries'>
            <div className='accordion-item mb-n3 mb-xl-1'>
              <h3 className='accordion-header'>
                <button
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-binded-content='#finance-img'
                  data-bs-target='#finance'
                  aria-expanded='true'
                  aria-controls='finance'
                  onClick={toggle}
                >
                  <div className='flex items-center'>
                    {open ? <AiTwotoneMinusCircle /> : <CiCirclePlus />}
                    <span className='text-primary inspira-accord'>{title}</span>
                  </div>
                </button>
              </h3>
              <Collapse isOpened={open}>
                <div className='accordion-body'>{desc}</div>
              </Collapse>
            </div>
          </div>
        </div>
        <div className='lg:col-span-1 mb-5'>
          <div>
            <div className='binded-content'>
              <div className={`binded-item ${open ? 'active' : ''}`} id='finance-img'>
              <img className='rounded-5 mt-5 lg:ml-4 xl:ml-8' src={imgSrc} alt={title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
