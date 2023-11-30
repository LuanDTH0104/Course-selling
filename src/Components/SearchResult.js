import React from 'react';
import HeaderTemplate from '../DefaultTemplate/HeaderTemplate';
import CourseContainer from './CourseContainer';
function SearchResult() {
    const courses = [
        {
            courseImage: './logo192.png',
            courseName: 'Lập trình React cho người mới bắt đầu',
            coursePrice: '100.000đ',
            courseRate: 5
        },
        {
            courseImage: './logo192.png',
            courseName: 'Lập trình React',
            coursePrice: '100.000đ',
            courseRate: 5
        },
        {
            courseImage: './logo192.png',
            courseName: 'Lập trình React',
            coursePrice: '100.000đ',
            courseRate: 5
        },
        {
            courseImage: './logo192.png',
            courseName: 'Lập trình React',
            coursePrice: '100.000đ',
            courseRate: 5
        },
        {
            courseImage: './logo192.png',
            courseName: 'Lập trình React',
            coursePrice: '100.000đ',
            courseRate: 5
        },
        {
            courseImage: 'https://ik.imagekit.io/tvlk/blog/2021/09/du-lich-anh-8-1024x576.jpg?tr=dpr-2,w-675',
            courseName: 'Lập trình React',
            coursePrice: '100.000đ',
            courseRate: 5
        }
    ]



    return (
        <>
            <HeaderTemplate children={<CourseContainer array={courses} msg={'Kết quà tìm kiếm'} />} />
        </>
    )
}

export default SearchResult;