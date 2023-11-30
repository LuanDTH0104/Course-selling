import React from 'react';
function Course({ courseName, coursePrice, courseImage, courseRate }) {
    return (
        <div className='border border-white w-auto h-[100%] rounded shadow-lg shadow-slate-400 m-[2%]'>
            <img src={courseImage} alt='courseImage' className='h-28 w-full object-contain mt-2' />
            <div className='p-[10%] '>
                <div className='text-md h-12 font-semibold'>{courseName}</div>
                <div className='flex justify-between mt-2'>
                    <div className='font-bold text-sm '>
                        {Array.from({ length: parseInt(courseRate) }).map((index) => {
                            return <i key={index} className="fa fa-star co-or text-orange-600" aria-hidden="true"></i>;
                        })}
                    </div>
                    <div className='text-black font-bold'>{coursePrice}</div>
                </div>
            </div>
        </div>
    );
}

export default Course;