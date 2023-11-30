import React from 'react';
import Course from './Course';

function CourseContainer({ array, msg}) {
    return (
        <div className='ml-[10%] '>
            <div className='text-xl font-semibold'>{msg}</div>
            <div className='w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 grid-flow-row md:gap-y-[5%] gap-y-[1%]'>
                {array && array.map((item, index) => (
                    <Course
                        key={index}
                        courseName={item.courseName}
                        coursePrice={item.coursePrice}
                        courseImage={item.courseImage}
                        courseRate={item.courseRate}
                    />
                ))}
            </div>
        </div>
    );
}

export default CourseContainer;