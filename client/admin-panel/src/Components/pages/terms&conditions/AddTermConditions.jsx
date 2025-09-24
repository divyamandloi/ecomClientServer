import React from 'react';
import BreadCrum from '../../common/BreadCrum';

export default function AddTermConditions() {
  let funObj = "Add Terms & Conditions"
  return (
    <div className='mx-[20px]'>
      <BreadCrum funObj={funObj} />
      <div className='mt-[20px]  border border-gray-400 rounded-[8px] '>
        <div className='bg-gray-300 p-[20px] rounded-[8px]'>
          <h2 className='font-bold text-[30px] font-serif'>{funObj}</h2>
        </div>
      </div>

    </div>  );
}
